FROM openjdk:11
VOLUME /tmp
COPY target/bases-microservice-thymeleaf-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
