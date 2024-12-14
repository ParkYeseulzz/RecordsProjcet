package com.web.project.record.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class testService {

	
	private final JdbcTemplate jdbcTemplate;
	
	//JdbcTemplate을 생성자 주입 방식으로 주입 받기 
	
	@Autowired
	public testService(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
//데이터 삽입 메소드
public void createUser(String name, int age){
    String sql = "INSERT INTO test (name, age) VALUES(?, ?)";
    //JDBCTEMPLATE로 데이터 삽입
    jdbcTemplate.update(sql,name, age);
}

}
