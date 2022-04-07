package com.example.boardkotlin.config

import org.hibernate.cfg.Environment
import org.slf4j.LoggerFactory
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.jdbc.DataSourceBuilder
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.orm.jpa.JpaTransactionManager
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter
import java.util.*
import javax.sql.DataSource

@Configuration
@EnableJpaRepositories(
    basePackages = ["com.example.boardkotlin.dao"],
    entityManagerFactoryRef = "EntityManager",
    transactionManagerRef = "TransactionManager"
)
class DataConfigContext {
    var logger = LoggerFactory.getLogger(DataConfigContext::class.java)
    
    @Bean
    @ConfigurationProperties(prefix="spring.datasource")
    fun dstDataSource() : DataSource = DataSourceBuilder.create().build()
    
    @Bean
    fun EntityManager():LocalContainerEntityManagerFactoryBean =
        (LocalContainerEntityManagerFactoryBean()).apply { 
            dataSource = dstDataSource()
            setPackagesToScan("com.example.boardkotlin.domain")
            val jpaProperties = Properties()
            jpaProperties[Environment.HBM2DDL_AUTO] = "none"
            jpaProperties[Environment.SHOW_SQL] = true
            jpaProperties[Environment.FORMAT_SQL] = true
            jpaProperties[Environment.DIALECT] = "org.hibernate.dialect.Oracle9Dialect"
            setJpaProperties(jpaProperties)
            jpaVendorAdapter = HibernateJpaVendorAdapter()
        }
    @Bean
    fun dstTransactionManager() = JpaTransactionManager(EntityManager().`object`!!)
}