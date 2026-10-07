<!-- p.23 -->
# 11.3 Alteração em Regras de Validação (Item 4.8.7.5 e 4.8.8 do MOC)

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| G05e | 55 | Chave de Acesso inválida:<br>- Série = [0-909] e CNPJ zerado ou dígito inválido, ou<br>- Série = [910-969] e CPF zerado ou dígito inválido | Obrig. | 617 | Rej. | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
| <!-- p.24 -->G05h | 55 | UF da Chave de Acesso diverge da UF Autorizadora | Obrig. | 249 | Rej. | Rejeição: UF da Chave de Acesso diverge da UF autorizadora |
| G06 | 55 | Acesso BD NFE (Chave: CNPJ/CPF Emitente, Modelo, Série e Número):<br>- Chave Acesso inexistente para o tpEvento que exige a existência da NF-e<br>**Observação**: Se existir no banco de dados uma Chave de Acesso divergente, concatenar na mensagem de erro a Chave de Acesso já existente, caso o CNPJ/CPF do Autor do evento seja o mesmo CNPJ/CPF da Chave de Acesso (opcional). | Obrig. | 494 | Rej. | Rejeição: Chave de Acesso inexistente [chNFe:99999999999999999999999999999999999999999999] |
| G08 | 55 | Se evento do emissor verificar se CNPJ/CPF do Autor diferente do CNPJ/CPF da Chave de Acesso da NF-e | Obrig. | 574 | Rej. | Rejeição: O autor do evento diverge do emissor da NF-e |

Nota: A regra de validação G05h acima citada evita o envio do evento de CC-e para a UF errada, para as UF participantes da SEFAZ Virtual. Esta validação já foi implementada faz algum tempo e deverá constar no MOC.
