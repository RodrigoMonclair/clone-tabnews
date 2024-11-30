function status(request, response) {
  response.setHeader("Content-type", "text/plain; charset=utf-8");
  response
    .status(200)
    .json({ chave: "os alunos do curso.dev são acima da média" });
}

export default status;
