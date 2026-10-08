<!-- p.56 -->
# 6.3 Evento de Inclusão de Condutor

- **Função:** evento destinado ao atendimento de solicitações de inclusão de condutor do veículo de MDFe rodoviário.
- **Autor do Evento:** O autor do evento é o emissor do MDFe. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base / CPF do Emissor do MDFe.
- **Código do Tipo de Evento:** 110114
- **Schema XML:** evIncCondutorMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **HP01** | **evIncCondutorMDFe** | G | - | - | - | - | TAG raiz |
| HP02 | descEvento | E | HP01 | C | 1-1 | 12 | Descrição do Evento: 'Inclusão Condutor' |
| **HP03** | **condutor** | G | HP01 | - | 1-1 | - | Informações do condutor do veículo |
| HP04 | xNome | E | HP03 | C | 1-1 | 2-60 | Nome do condutor |
| HP05 | CPF | E | HP03 | N | 1-1 | 11 | CPF do condutor |

## 6.3.1 Validação das Regras Específicas do Evento

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| K01 | Verificar se o nSeqEvento é maior que o valor permitido (até 99) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| K02 | Emitente deve estar habilitado na base de dados para emissão de MDFe<br>**Observação:** Se evento gerado por PAA (grupo: infPAA) verificar se o CNPJ do emitente está em situação ativa no cadastro do CNPJ MEI da RFB | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do MDFe |
| K03 | Verificar se MDFe já está cancelado. [nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 218 | Rej. | Rejeição: MDFe já está cancelado na base de dados da SEFAZ. |
| K04 | Verificar se houve encerramento do manifesto [nProt:999999999999999][dhEnc: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 609 | Rej. | Rejeição: MDFe já está encerrado na base de dados da SEFAZ |
| K05 | Verificar se MDFe é do modal rodoviário | Obrig. | 644 | Rej. | Rejeição: Evento de inclusão de condutor só pode ser registrado para o modal rodoviário |
| K06 | CPF do condutor: CPF inválido (dígito de controle, zeros) | Obrig. | 645 | Rej. | Rejeição: CPF do condutor inválido |

## 6.3.2 Final do Processamento

Se o evento de inclusão de condutor for homologado, a situação de retorno será "135 – Evento vinculado a MDFe".
