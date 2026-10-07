<!-- p.13 -->
# 4.2 Validação do Certificado Digital de Transmissão / Assinatura

## 4.2.1 Validação do Certificado Digital de Transmissão (Item 4.1.5 do MOC)

Com a possibilidade de uso do Certificado Digital tipo “e-CPF”, alterar a validação do Certificado Digital de Transmissão, conforme segue:

| # | Regra de Validação | Crítica | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| A07 | Falta a extensão de CNPJ no Certificado (OtherName - OID=2.16.76.1.3.3) ou a extensão de CPF (OtherName - OID=2.16.76.1.3.1) | Obrig. | 282 | Rej. | Rejeição: Certificado Transmissor sem CNPJ/CPF |

## 4.2.2 Validação do Certificado Digital de Assinatura (Item 4.1.8.3 do MOC)

Com a possibilidade de uso do Certificado Digital tipo “e-CPF”, alterar a validação do Certificado Digital de Assinatura, conforme segue:

| # | Regra de Validação | Crítica | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| E03 | Falta a extensão de CNPJ no Certificado (OtherName - OID=2.16.76.1.3.3) ou a extensão de CPF (OtherName - OID=2.16.76.1.3.1) | Obrig. | 292 | Rej. | Rejeição: Certificado de Assinatura sem CNPJ/CPF |

## 4.2.3 Validação da Assinatura Digital (Item 4.1.8.4 do MOC)

Com a possibilidade de uso do Certificado Digital tipo “e-CPF”, alterar a validação da Assinatura Digital, conforme segue:

| # | Regra de Validação | Crítica | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| F03 | Se Certificado de Assinatura com CNPJ e CNPJ do Certificado difere do CNPJ da SEFAZ para a UF:<br>- CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital | Obrig. | 213 | Rej. | Rejeição: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital |
| F03A | Se Certificado de Assinatura com CPF:<br>- CPF do Emitente difere do CPF do Certificado Digital | Obrig. | 227 | Rej. | Rejeição: CPF do Emitente difere do CPF do Certificado Digital |
