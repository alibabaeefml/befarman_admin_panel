export default getJsonOwner = (data) => ({
  id: data.id,
  name: data.name,
  first_name: data.first_name,
  last_name: data.last_name,
  thumbnail: data.thumbnail,
  avg_vote: data.avg_vote,
  summary: data.summary,
});
