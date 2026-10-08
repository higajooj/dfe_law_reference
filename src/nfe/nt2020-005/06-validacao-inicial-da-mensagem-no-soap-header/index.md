<!-- p.23 -->
# 6. Validação Inicial da Mensagem no SOAP Header (~~NfeAutorizacao,~~ Item 4.1.2 do MOC v7.0, Anexo 1)

Na NT2016.002 houve uma padronização nos nomes dos parâmetros de entrada e saída dos Web Services e algumas outras definições.

Observado que algumas empresas novas, não incluem o parâmetro de entrada “nfeDadosMsg” na mensagem SOAP ou erram a informação do nameSpace. Nesses casos, a SEFAZ Autorizadora retorna o erro “999”, ou algum outro erro na chamada do Web Service.

Criada uma regra de validação específica para facilitar a identificação do erro pela empresa, conforme segue:

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| B00 | • Não encontrado o Parâmetro de Entrada na mensagem SOAP “nfeDadosMsg”<br>**Nota**: Verificar ausência do parâmetro de entrada do Web Service, ou possível diferença no nameSpace previsto para o Web Service. | Obrig. | 242 | Rej | Rejeição: Mensagem SOAP inválida |

O mesmo deve ser feito para os demais Web Services previstos no MOC:

- ~~4.2.5 Validação Inicial da Mensagem no Web Service (NfeRetAutorizacao);~~
- ~~4.3.5 Validação Inicial da Mensagem no Web Service (NfeRecepcaoEvento - Cancelamento);~~
- ~~4.4.5 Validação Inicial da Mensagem no Web Service (NfeInutilizacao);~~
- ~~4.5.5 Validação Inicial da Mensagem no Web Service (NfeConsulta);~~
- ~~4.6.5 Validação Inicial da Mensagem no Web Service (CadConsultaCadastro);~~
- ~~4.7.5 Validação Inicial da Mensagem no Web Service (NfeStatusServico);~~
- ~~4.8.5 Validação Inicial da Mensagem no Web Service (RecepcaoEvento – Carta de Correção);~~
- ~~4.9.5 Validação Inicial da Mensagem no Web Service (RecepcaoEvento – Manifestação do Destinatário);~~
- ~~4.10.6 Validação Inicial da Mensagem no Web Service (RecepcaoEvento - EPEC);~~

> **Revogado/Descontinuado:** a palavra “NfeAutorizacao,” do título, o texto “O mesmo deve ser feito para os demais Web Services previstos no MOC:” e a lista de itens 4.2.5 a 4.10.6 estão riscados na NT original.

## DA. Autorização – Área de Dados do Lote de NF-e

Somente é aceita autorização assíncrona da NFC-e se o Lote contiver mais do que uma nota.

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| GAP03a-3 | Solicitação de resposta assíncrona (indSinc=0) para lote com somente 1 (uma) NFC-e | Obrig. | 452 | Rej. | Rejeição: Solicitada resposta assíncrona para Lote com somente 1 (uma) NFC-e |
