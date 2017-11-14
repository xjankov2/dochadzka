package sk.dochadzka.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

@Component
public class DBUpdater {

    private final static Logger LOG = LoggerFactory.getLogger(DBUpdater.class);

    @Autowired
    DataSource dataSource;

    @PostConstruct
    public void afterStartup() {
        handleDBUpdate();
    }

    private void handleDBUpdate() {
        try {
            String updateScript = System.getProperties().getProperty("db-update");
            Resource resource = new ClassPathResource("db-update/" + updateScript + ".sql");
            ResourceDatabasePopulator databasePopulator = new ResourceDatabasePopulator(resource);

            LOG.info("Updating DB using " + updateScript + ".sql ...");
            databasePopulator.execute(dataSource);
            LOG.info("DB updated successfully");
        } catch (Exception exc) {
            System.out.println(exc.getLocalizedMessage());
        }
    }
}
