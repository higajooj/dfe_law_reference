<!-- p.19 -->
# 6.2 Alteração em Regras de Validação (Item 4.4.7.4 do MOC)

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I02a | 55/65 | Série do Pedido de Inutilização identifica emitente com CPF:<br>– Série na faixa de 910-969 | Obrig. | 266 | Rej | Rejeição: Série utilizada não permitida no Web Service |
| I09 | 55/65 | Acesso ao BD Evento EPEC (Chave: Modelo, UF, CNPJ Emitente, Série, Nro):<br>- Verificar se existe EPEC (NT 2014.001) | Obrig. | 241 | Rej. | Rejeição: Um número da faixa já foi utilizado |
