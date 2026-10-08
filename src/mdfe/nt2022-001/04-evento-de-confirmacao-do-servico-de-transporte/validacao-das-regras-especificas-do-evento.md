# Validação das Regras Específicas do Evento

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| K01 | Verificar se o nSeqEvento é maior que o valor permitido (1 até 99) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| K02 | Verificar se número do Protocolo informado difere do número do Protocolo do MDF-e | Obrig. | 222 | Rej. | Rejeição: Protocolo de Autorização de Uso difere do cadastrado |
| K03 | Verificar se MDFe já está cancelado. | Obrig. | 218 | Rej. | Rejeição: MDFe já está cancelado na base de dados da SEFAZ. [nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. |
| K04 | Verificar se o MDFe é do modal Rodoviário | Obrig. | 747 | Rej. | Rejeição: MDFe deve ser do modal rodoviário para o evento Confirmação da operação de transporte |
| K05 | Autor do Evento deve ser um dos contratantes do MDFe | Obrig. | 748 | Rej. | Rejeição: Contratante não relacionado no MDFe |

**Observação:** o controle do número sequencial do evento (nSeq) é feita pelo autor, em caso de duplicidade de eventos com o mesmo número será informado na mensagem de retorno (631) qual autor já utilizou essa numeração. Nesse caso, o autor do evento deverá incrementar o nSeq e fazer nova tentativa. Essa situação poderá ocorrer no caso em que o MDFe que possuir múltiplos contratantes e receber eventos deste tipo de mais de um autor.
