1. mvn clean install -pl db-initialize - BE
2. mvn spring-boot:start -pl db-initialize - BE
3. spustit mvn clean package na FE:
    a) swagger.json na vygenerovanie modelu vo faze generate-sources
    b) ng build --prod na vygenerovanie FE buildu vo faze compile
    c) FE dist do backend/src/main/webapp vo faze package
6. spustenie spring-boot