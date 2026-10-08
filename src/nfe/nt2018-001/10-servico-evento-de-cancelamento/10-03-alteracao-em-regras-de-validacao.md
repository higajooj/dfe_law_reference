<!-- p.22 -->
# 10.3 Alteração em Regras de Validação (Item 4.3.7-e e 4.3.8 do MOC)

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| G04e | 55 | Chave de Acesso inválida:<br>- Série = [0-909] e CNPJ zerado ou dígito inválido, ou<br>- Série = [910-969] e CPF zerado ou dígito inválido | Obrig. | 617 | Rej. | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
| G06 | 55 | Acesso BD NFE (Chave: CNPJ/CPF Emitente, Modelo, Série e Número):<br>- Chave Acesso inexistente para o tpEvento que exige a existência da NF-e<br>**Observação**: Se existir no banco de dados uma Chave de Acesso divergente, concatenar na mensagem de erro a Chave de Acesso já existente, caso o CNPJ/CPF do Autor do evento seja o mesmo CNPJ/CPF da Chave de Acesso (opcional). | Obrig. | 494 | Rej. | Rejeição: Chave de Acesso inexistente [chNFe:99999999999999999999999999999999999999999999] |
| <!-- p.23 -->G08 | 55 | Se evento do emissor verificar se CNPJ/CPF do Autor diferente do CNPJ/CPF da Chave de Acesso da NF-e | Obrig. | 574 | Rej. | Rejeição: O autor do evento diverge do emissor da NF-e |
| ~~GA01~~ | ~~55~~ | ~~Campo serie – na autorização pela SEFAZ Autorizadora: não aceitar série diferente de 0-899~~ | ~~Obrig.~~ | ~~266~~ | ~~Rej~~ | ~~Rejeição: Série utilizada não permitida no Web Service~~ |
| ~~GA02~~ | ~~55~~ | ~~Campo serie – na autorização pelo SCAN: não aceitar série diferente de 900-999~~ | ~~Obrig.~~ | ~~503~~ | ~~Rej~~ | ~~Rejeição: Série utilizada fora da faixa permitida no SCAN (900-999)~~ |

> **Revogado/Descontinuado:** linhas GA01 e GA02 riscadas na fonte.
