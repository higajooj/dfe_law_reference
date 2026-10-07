<!-- p.9 -->
# 4. Evento de Vinculação da Transação de Pagamento no DF-e

- **Função:** Este Evento deverá ser gerado pelo emitente do DF-e sempre que se desejar vincular uma ou mais transações financeiras a um documento fiscal previamente autorizado. Obs.: É possível que a transação financeira vinculada esteja em situação iniciada, ainda pendente de pagamento e/ou liquidação (ex. boleto emitido ou QR code Pix gerado).
- **Autor:** Emitente da NFe/NFCe
- **Modelo:** NF-e modelo 55/65
- **Código do Tipo de Evento:** 110300

## 4.1.1. Leiaute Mensagem de Entrada

Estrutura XML da parte específica do Evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8 do MOC.

Schema XML: envEventoNFe_v9.99.xsd  
Schema XML - parte específica: e110300_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P17** | **detEvento** | **G** | **P06** | **-** | **1-1** | **-** | **Detalhes do Evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do leiaute do Evento (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 20 | Descrição do Evento: “Vinculação Pagamento” |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código do Órgão Autor do Evento. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar: 1=Empresa Emitente<br>Valores: 1=Empresa Emitente, 2=Empresa destinatária; 3=Empresa; 5=Fisco; 6=RFB; 9=Outros Órgãos. |
| P22 | verAplic | E | P17 | N | 1-1 | 1-20 | Versão do aplicativo do autor do Evento |
| P23 | nProt | E | P17 | N | 1-1 | 15 | Número do protocolo de autorização do DF-e |
| **P24** | **gPgto** | **G** | **P17** | **-** | **1-1** | **-** | **Dados de cada pagamento previsto para o DF-e** |
| P25 | idTransacao | A | P24 | C | 1-1 | 2-35 | Atributo Identificador da transação financeira, de acordo com a transação de pagamento. |
| P26 | tpMeioPgto | E | P24 | N | 1-1 | 2 | Código do meio de pagamento.<br>**Observação:** consultar Tabela Nacional de Códigos de Meios de Pagamento (Informe Técnico 2026.001 dos DF-e). |
| P27 | CNPJReceb | E | P24 | C | 1-1 | 14 | CNPJ completo do recebedor do pagamento (fornecedor, plataforma, ou outra entidade que receba o pagamento do adquirente).<br>**Observação:** indicar o CNPJ responsável pelo recebimento dos valores do adquirente na transação de pagamento. É possível que o CNPJ do recebedor seja diferente do CNPJ do fornecedor constante no documento fiscal. |
| P28 | CNPJBasePSP | E | P24 | C | 1-1 | 8 | CNPJ base da instituição financeira ou de pagamento utilizada pelo recebedor do pagamento (fornecedor, plataforma, ou outra entidade que receba o pagamento do adquirente). |

## 4.1.2. Leiaute Mensagem de Retorno

Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2 do MOC.

## 4.1.3. Validação das Regras de Negócio Específicas

Serão aplicadas as regras de validação gerais apresentadas no item 5.8.4 do MOC e as regras de negócio específicas listadas a seguir.

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| P21-10 | Tipo do Autor difere de “1=Empresa Emitente” | Obrig. | 466 | Rejeição: Evento com Tipo de Autor incompatível |
| P26-10 | Código do meio de pagamento inválido (tag: tpMeioPgto)<br>**Observação:** consultar Tabela Nacional de Códigos de Meios de Pagamento (Informe Técnico 2026.001 dos DF-e). | Obrig | 1273 | Rejeição: Meio de pagamento inválido |
| P27-10 | CNPJ do recebedor do pagamento inválido (tag: CNPJReceb) | Obrig. | 1274 | Rejeição: CNPJ do recebedor do pagamento inválido |
