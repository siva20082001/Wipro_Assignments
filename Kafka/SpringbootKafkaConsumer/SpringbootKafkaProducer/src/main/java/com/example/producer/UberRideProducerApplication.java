package com.example.producer;



import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class UberRideProducerApplication {
    public static void main(String[] args) {
        SpringApplication.run(UberRideProducerApplication.class, args);
    }
}
/*
D:\WIPRO2025>cd kafka

D:\WIPRO2025\kafka>cd bin

D:\WIPRO2025\kafka\bin>cd windows

D:\WIPRO2025\kafka\bin\windows>.\zookeeper-server-start.bat ..\..\config\zookeeper.properties
*/
/*

D:\>cd wipro2025

D:\WIPRO2025>cd kafka

D:\WIPRO2025\kafka>cd bin

D:\WIPRO2025\kafka\bin>cd windows

D:\WIPRO2025\kafka\bin\windows>kafka-server-start.bat ..\..\config\server.properties
*/