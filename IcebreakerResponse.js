function IcebreakerResponse(email){
  this.email = email
}
Icebreaker.BatchCreate = function(emails){
  return data.map(function(userData){
    return new IcebreakerResponse(userData[0], userData[1])
  })
