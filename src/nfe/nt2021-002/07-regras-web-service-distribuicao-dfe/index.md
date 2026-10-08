<!-- p.20 -->
# 7. Alterações em Regras de Validação - Web Service nfeDistribuicaoDFe

A Chave de Acesso de NF-e emitida ao abrigo da NFF (tpEmis=3) possui uma regra de formação onde a série não identifica se a Chave de Acesso contém um CPF ou CNPJ. No caso deste Web Service, não é necessário validar o CNPJ/CPF da chave de acesso no caso de NFF (tpEmis=3-NFF).

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| H11² | Chave de Acesso inválida:<br>- Série = [0-909] e CNPJ zerado ou dígito inválido, ou<br>- Série = [910-969] e CPF zerado ou dígito inválido;<br>Exceção: Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002) | Obrig. | 617 | Rej. | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
