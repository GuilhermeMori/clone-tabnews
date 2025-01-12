function status(request, response) {
  response.status(200).json({ chave: "Kau te amo" });
}

export default status;
