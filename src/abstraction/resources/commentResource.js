export function getArrayComment(data) {
  return data.map((comment) => getJsonComment(comment));
}

export const getJsonComment = (data) => ({
  id: data.id,
  author_name: data.author_name,
  title: data.title,
  content: data.content,
  vote: data.vote,
  created_at: data.created_at,
});
