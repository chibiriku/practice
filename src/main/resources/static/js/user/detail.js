'user strict'



jQuery(function($){
	
	$('#btn-update').click(function(event){
		
		updateUser();
	});
	
	$('#btn-delete').click(function(event){
		
		deleteUser();
	});
	
});
	
function updateUser(){
	
	var formData = $('#user-detail-form').serializeArray();
	
	$.ajax({
		type : "PUT",
		cache : false,
		url : '/user/update',
		data : formData,
		dataType : 'json',
	}).done(function(data){
		
		alert('ユーザーを更新しました');
		
		window.location.href = '/user/list';
		
	}).fail(function(jqXHR,textStatus,errorThrown){
		
		alert('ユーザー更新に失敗しました');
	}).always(function(){
		
	});
}


function deleteUser(){
	
	var formData = $('#user-detail-form').serializeArray();
	
	$.ajax({
		type : "DELETE",
		cache : false,
		url : '/user/delete',
		data : formData,
		dataType : 'json',
	}).done(function(data){
		
		alert('ユーザーを削除しました');
		
		window.location.href = '/user/list';
		
	});fail(function(jqXHR,textStatus,errorThrown){
		
		alert('ユーザー削除に失敗しました')
	}).alwys(function(){
		
	});
}