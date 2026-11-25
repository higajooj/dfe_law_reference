# 8. Alterações de Schema

- Alterada expressão regular para as tags xNome, xFant, xBairro, xLgr, xMun, xPais de 1 – 60 para 2 – 60, ou seja, aceitar no mínimo 2 caracteres;
- Criada expressão regular para tag nroItem no evento CC-e (aceitar de 1 a 99);
- Tag forPag (Forma de Pagamento) passa a ser opcional no schema e deverá ser retirada em versões futuras, recomendamos portanto que deixe de ser preenchida;
- Removidos os grupos opcionais de local da entrega (dest\locEnt) e local da coleta (rem\locColeta);
- Altera expressão regular das tags qtdRat dos grupos de Unidade de Carga e Unidade de Transporte para aceitar 3,2 (3 inteiros e 2 decimais) ou 3,3 (3 inteiros e 3 decimais);
- Alterada expressão regular da tag unidRat do modal Aquaviário para aceitar 3,2 (3 inteiros e 2 decimais) ou 3,3 (3 inteiros e 3 decimais);
