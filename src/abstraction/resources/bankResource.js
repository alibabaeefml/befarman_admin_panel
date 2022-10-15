export default getJsonBank = (data) => ({
  name: data.name,
  account_number: data.account_number,
  card_number: data.card_number,
  iban: data.iban,
});
