<!-- p.04 -->

# 2 Regras solicitadas pela ANTT

| Id | Regra | Obrigatoriedade | Código | Tipo | Mensagem |
|---|---|---|---|---|---|
| **F55a** | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CTe globalizado (tpEmit=3) ou Transportador Próprio que informou o Tipo de Transportador (tpEmi=2 com tag tpTransp informada) e MDFe possuir apenas um DF-e transportado no grupo infDoc:<br>O campo NCM do grupo produto predominante deverá ser informado | Obrig. | 301 | Rej. | Rejeição: O NCM do produto predominante da carga lotação deve ser informado |
| **F55b** | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CTe globalizado (tpEmit=3) ou Transportador Próprio que informou o Tipo de Transportador (tpEmi=2 com tag tpTransp informada) e MDFe possuir apenas um DF-e transportado no grupo infDoc:<br><br>O grupo de informações do pagamento deve ser informado (infPag) | Obrigt. | 302 | Rej. | Rejeição: As informações de pagamento devem ser informadas para carga lotação |
| **F113a** | Se modal rodoviário, informado RNTRC (do emitente ou do proprietário) no caso de TAC ou Equiparado a TAC (ver cadastro do RNTRC da ANTT) os grupos de informações bancárias (infBanc) e de pagamento (infPag) devem ser informados. | Facult | 303 | Rej. | Rejeição: Dados Bancários e de pagamento devem ser informados para TAC e equiparado a TAC |
| **F113b** | Se modal rodoviário, informado RNTRC (do emitente ou do proprietário) no caso de TAC ou Equiparado a TAC (ver cadastro do RNTRC da ANTT) o grupo infCIOT deve ser informado | Facult | 304 | Rej. | Rejeição: CIOT deve ser informado para TAC e equiparado a TAC |
