/**
 * Phone Country Code Select Component
 * Displays country flag, name, and phone prefix in a dropdown.
 * Adapted from GST-UI registration feature.
 */

import {
	Autocomplete,
	Box,
	InputAdornment,
	TextField,
	Typography,
} from "@lsy-netline/netline-ui";
import type {
	Control,
	FieldErrors,
	FieldPath,
	FieldValues,
} from "react-hook-form";
import { Controller } from "react-hook-form";
import { COUNTRIES } from "@/consts/countries.consts";
import {
	COUNTRY_FLAG_STYLE,
	AUTOCOMPLETE_LISTBOX_SLOT_PROPS,
} from "@/consts/ui.consts";

interface PhoneCountryCodeSelectProps<
	TFieldValues extends FieldValues = FieldValues,
> {
	prefixName: FieldPath<TFieldValues>;
	numberName: FieldPath<TFieldValues>;
	label: string;
	required?: boolean;
	control: Control<TFieldValues>;
	errors?: FieldErrors<TFieldValues>;
}

interface CountryOption {
	id: string;
	label: string;
	value: string;
	country: {
		iso2: string;
		name: string;
		phonePrefix: string;
		flagPath: string;
	};
}

const countryOptions: CountryOption[] = COUNTRIES.map((country) => ({
	id: country.iso2,
	label: `${country.name} ${country.phonePrefix}`,
	value: country.phonePrefix,
	country,
}));

function renderOption(
	props: React.HTMLAttributes<HTMLLIElement> & { key: React.Key },
	option: CountryOption,
): React.JSX.Element {
	const { key: _, ...otherProps } = props;
	void _;
	return (
		<li key={option.id} {...otherProps}>
			<Box display="flex" alignItems="center" gap={1}>
				<img
					src={option.country.flagPath}
					alt={option.country.name}
					style={COUNTRY_FLAG_STYLE}
					loading="lazy"
				/>
				<Typography variant="body2">{option.country.name}</Typography>
				<Typography variant="body2" sx={{ color: "text.secondary" }}>
					{option.country.phonePrefix}
				</Typography>
			</Box>
		</li>
	);
}

export function PhoneCountryCodeSelect<
	TFieldValues extends FieldValues = FieldValues,
>({
	prefixName,
	numberName,
	label,
	required,
	control,
	errors,
}: PhoneCountryCodeSelectProps<TFieldValues>): React.JSX.Element {
	return (
		<Box display="flex" gap={1} alignItems="flex-start">
			<Controller
				name={prefixName as never}
				control={control}
				render={({ field: { value, onChange, ...field } }) => {
					const selectedOption =
						countryOptions.find((opt) => opt.value === value) || undefined;

					return (
						<Autocomplete<CountryOption, false, true, false>
							{...field}
							value={selectedOption}
							onChange={(_event, newValue) =>
								onChange(newValue?.value ?? "")
							}
							options={countryOptions}
                            disableClearable
							sx={{ minWidth: 180 }}
							getOptionLabel={(option) => option.value}
							isOptionEqualToValue={(option, val) =>
								option.value === val.value
							}
							slotProps={{
								popper: {
									placement: "bottom-start",
									sx: { width: "fit-content !important" },
								},
								listbox: {
									sx: {
										width: "fit-content",
										minWidth: "100%",
										...AUTOCOMPLETE_LISTBOX_SLOT_PROPS.listbox.sx,
									},
								},
							}}
							renderOption={renderOption}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Country Code"
									error={!!errors?.[prefixName]}
									helperText={
										errors?.[prefixName]?.message
											? String(errors[prefixName]!.message)
											: ""
									}
									slotProps={{
										input: {
											...params.InputProps,
											startAdornment: selectedOption ? (
												<>
													<InputAdornment position="start">
														<img
															src={selectedOption.country.flagPath}
															alt={selectedOption.country.name}
															style={COUNTRY_FLAG_STYLE}
															loading="lazy"
														/>
													</InputAdornment>
													{params.InputProps.startAdornment}
												</>
											) : (
												params.InputProps.startAdornment
											),
										},
									}}
								/>
							)}
						/>
					);
				}}
			/>

			<Controller
				name={numberName as never}
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						label={label}
						required={required}
						fullWidth
						error={!!errors?.[numberName]}
						helperText={
							errors?.[numberName]?.message
								? String(errors[numberName]!.message)
								: ""
						}
					/>
				)}
			/>
		</Box>
	);
}
