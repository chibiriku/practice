package com.example.domain.user.service;

import java.util.List;

import com.example.domain.user.model.MUser;

public interface UserService {
	
	public void signup(MUser user);
	
	//ユーザー取得
	public List<MUser> getUsers();
	
	//ユーザー情報一件取得
	public MUser getUserOne(String userId);
	
	//ユーザー更新
	public void updateUserOne(String userId, String password, String userName);
	
	//ユーザーの削除
	public void deleteUserOne(String userId);
}
