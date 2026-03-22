FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app
COPY . .
ARG HTTP_PROXY
ARG HTTPS_PROXY
ARG NO_PROXY
ENV JAVA_TOOL_OPTIONS="-Dhttps.proxyHost=proxy.lsy.bud.dlh.de -Dhttps.proxyPort=3128 -Dhttp.proxyHost=proxy.lsy.bud.dlh.de -Dhttp.proxyPort=3128"
RUN chmod +x mvnw && ./mvnw package -DskipTests -Djacoco.skip=true -Dcheckstyle.skip=true -Dspotbugs.skip=true -B -ntp -s .mvn/docker-settings.xml

FROM eclipse-temurin:21-jre-alpine
LABEL maintainer=booking-team
EXPOSE 8080
RUN addgroup --system appuser && adduser -S appuser -G appuser
WORKDIR /app
COPY --from=build /app/booking-web/target/*-exec.jar app.jar
USER appuser:appuser
ENTRYPOINT ["sh", "-c", "java ${JAVA_OPTS} -jar app.jar"]
