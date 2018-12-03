export const uploadFile = (files,type) => async (dispatch, getState, {api}) => {

  if (type === 'tasks') {
  let data = new FormData();
  for (var j = 0; j < files.length; j++) {
    data.append('file', files[j]);
  }
    const fileUploadResult = await api.post('tasks/upload', data)
    return fileUploadResult.data.createdID
  } else if (type === 'templates') {
    let data = new FormData();
    for (var j = 0; j < files.length; j++) {
      data.append('file', files[j]);
    }
      const fileUploadResult = await api.post('templates/upload', data)
      return fileUploadResult.data.createdID
  }
}
