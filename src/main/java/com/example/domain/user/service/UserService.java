package com.example.domain.user.service;

import java.util.List;

import com.example.domain.user.model.MUser;

public interface UserService {
	
	public void signup(MUser user);
	
	//ユーザー取得
	public List<MUser> getUsers();
	
	//ユーザー情報一件取得
	public MUser getUserOne(String userId);
	

}
