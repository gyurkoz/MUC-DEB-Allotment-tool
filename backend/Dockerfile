FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app
COPY . .
ARG HTTP_PROXY
ARG HTTPS_PROXY
ARG NO_PROXY
ARG JAVA_TOOL_OPTIONS=""
ARG MAVEN_SETTINGS=.mvn/docker-settings.xml
ENV JAVA_TOOL_OPTIONS=${JAVA_TOOL_OPTIONS}
RUN chmod +x mvnw && \
    if [ -n "${JAVA_TOOL_OPTIONS}" ]; then \
      ./mvnw package -DskipTests -Djacoco.skip=true -Dcheckstyle.skip=true -Dspotbugs.skip=true -B -ntp -s ${MAVEN_SETTINGS}; \
    else \
      ./mvnw package -DskipTests -Djacoco.skip=true -Dcheckstyle.skip=true -Dspotbugs.skip=true -B -ntp; \
    fi

FROM eclipse-temurin:21-jre-alpine
LABEL maintainer=booking-team
EXPOSE 8080
RUN addgroup --system appuser && adduser -S appuser -G appuser
WORKDIR /app
COPY --from=build /app/booking-web/target/*-exec.jar app.jar
USER appuser:appuser
ENTRYPOINT ["sh", "-c", "java ${JAVA_OPTS} -jar app.jar"]
