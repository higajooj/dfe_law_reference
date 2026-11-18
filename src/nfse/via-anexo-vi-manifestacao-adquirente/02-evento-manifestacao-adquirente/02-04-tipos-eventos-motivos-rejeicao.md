# 4. Tipos de Eventos de Manifestação e Motivos de Rejeição

Conforme a Nota Técnica nº 010, o evento de manifestação é composto por dois grupos mutuamente excludentes:

| Tipo de Evento | Código de Tag | Código do Evento | Descrição da Operação |
| --- | --- | --- | --- |
| Manifestação com Aceite | e203202 | 203202 | O adquirente confirma formalmente a utilização da rodovia e vincula seu CPF/CNPJ à nota. |
| Manifestação com Rejeição | e203204 | 203204 | O adquirente declara o desconhecimento ou incorreção da nota emitida contra seu veículo. |

**Tabela de Motivos para Manifestação de Rejeição (cMotivo)**

Ao emitir um evento de rejeição (e203204), deve-se obrigatoriamente preencher o campo cMotivo com um dos códigos numéricos abaixo:

- 1: NFS-e Via em duplicidade
- 2: Não ocorrência da passagem do veículo
- 3: Divergência na data da passagem do veículo
- 4: Divergência na Categoria do Veículo
- 5: Divergência na Placa do veículo
- 6: Divergência no Valor do serviço
- 7: Divergência no Modo de Pagamento
- 8: Divergência no Valor das deduções
- 99: Outros motivos (exige o preenchimento da justificativa no campo xMotivoRejeita).
