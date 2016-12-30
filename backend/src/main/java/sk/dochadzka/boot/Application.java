package sk.dochadzka.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.persistence.Persistence;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by jankovicovci on 17.12.2016.
 */
@SpringBootApplication
@ComponentScan(basePackages = "sk.dochadzka.services")
@EntityScan(basePackages = "sk.dochadzka.model")
@EnableJpaRepositories(basePackages = "sk.dochadzka.services.repository")
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
