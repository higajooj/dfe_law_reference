<!-- p.04 -->
# Eliminação do Tipo de Emissão FS-DA

Conforme estabelecido no AJUSTE SINIEF tipo de emissão FS-DA fica vedado, exceto para emissão de Documentos para a SEFAZ Minas Gerais.

## CTe

| # | Regra de Validação | Aplic | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| G008a | Rejeitar tipo de emissão (tag:tpEmis) igual a 5 (FS-DA)<br><br>**Exceção:** A exceção permite-se uso do FS-DA para CTe emitidos da SEFAZ Minas Gerais | Obrig | 928 | Rej. | Rejeição: Tipo de emissão FS-DA não é permitido |
| G008b | Se tipo de emissão (tag:tpEmis) igual a 1 (Normal)<br><br>dhCont e xJust não devem ser informados | Obrig, | 937 | Rej. | Rejeição: Campos da justificativa de entrada em contingência não podem ser informados para emissão normal |
| ~~G008~~ | ~~Se forma de emissão do CTe for diferente de 5 (FS-DA):~~<br><br>~~dhCont e xJust não devem ser informados~~<br><br>**Exceção:** Esta regra fica mantida apenas para SEFAZ MG | ~~Obrig.~~ | ~~586~~ | ~~Rej.~~ | ~~Rejeição: Data e Justificativa de entrada em contingência não devem ser informadas para tipo de emissão diferente de FS-DA.~~ |
| ~~G009~~ | ~~Se forma de emissão do CTe for igual a 5 (FS-DA):~~<br><br>~~dhCont e xJust devem ser informados~~<br><br>**Exceção:** Esta regra fica mantida apenas para SEFAZ MG | ~~Obrig.~~ | ~~587~~ | ~~Rej.~~ | ~~Rejeição: Data e Justificativa de entrada em contingência devem ser informadas~~ |
| G103 | <!-- p.05 -->Se tipo de emissão for diferente de ~~FS-DA (tpEmis=5) e~~ EPEC (tpEmis=4):<br><br>Data-Hora de Emissão com atraso superior a 168 horas em relação ao horário de recepção na SEFAZ Autorizadora.<br><br>**Exceção:** Esta regra mantem a redação somente para SEFAZ MG | Obrig. | 228 | Rej. | Rejeição: Data de Emissão muito atrasada |
| G215 | Se tipo de emissão for igual a ~~FS-DA (tpEmis=5),~~ EPEC (tpEmis=4):<br><br>O parâmetro sign deve informado no QR-Code<br><br>**Exceção:** Esta regra mantem a redação somente para SEFAZ MG | Obrig. | 853 | Rej. | Rejeição: Parâmetro sign não informado no QR Code para emissão em contingência |
| G217 | Se tipo de emissão for igual ~~FS-DA (tpEmis=5),~~ EPEC (tpEmis=4):<br><br>Valor da assinatura (sign) do QR-Code difere do valor calculado<br><br>**Exceção:** Esta regra mantem a redação somente para SEFAZ MG | Obrig. | 855 | Rej. | Rejeição: Assinatura do QR-Code difere do calculado |

> **Revogado/Descontinuado:** texto riscado no original nas regras G008, G009, G103, G215 e G217.

## CTeOS

| # | Regra de Validação | Aplic | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| H004a | Rejeitar tipo de emissão (tag:tpEmis) igual a 5 (FS-DA)<br><br>**Exceção:** A exceção permite-se uso do FS-DA para CTe emitidos da SEFAZ Minas Gerais | Obrig | 929 | Rej. | Rejeição: Tipo de emissão FS-DA não é permitido |
| H004b | Se tipo de emissão (tag:tpEmis) igual a 1 (Normal)<br><br>dhCont e xJust não devem ser informados | Obrig, | 937 | Rej. | Rejeição: Campos da justificativa de entrada em contingência não podem ser informados para emissão normal |
| ~~H004~~ | ~~Se forma de emissão do CTe for diferente de 5 (FS-DA:~~<br><br>~~dhCont e xJust não devem ser informados~~<br><br>**Exceção:** Esta regra fica mantida apenas para SEFAZ MG | ~~Obrig.~~ | ~~586~~ | ~~Rej.~~ | ~~Rejeição: Data e Justificativa de entrada em contingência não devem ser informadas para tipo de emissão diferente de FS-DA.~~ |
| ~~H005~~ | ~~Se forma de emissão do CTe for igual a 5 (FS-DA):~~<br><br>~~dhCont e xJust devem ser informados~~<br><br>**Exceção:** Esta regra fica mantida apenas para SEFAZ MG | ~~Obrig.~~ | ~~587~~ | ~~Rej.~~ | ~~Rejeição: Data e Justificativa de entrada em contingência devem ser informadas~~ |
| H077 | Se tipo de emissão for diferente de FS-DA (tpEmis=5)<br><br>Data-Hora de Emissão com atraso superior a 168 horas em relação ao horário de recepção na SEFAZ Autorizadora.<br><br>**Exceção:** Esta regra mantem a redação somente para SEFAZ MG | Obrig. | 228 | Rej. | Rejeição: Data de Emissão muito atrasada |
| ~~H131~~ | ~~Se tipo de emissão for igual a FS-DA (tpEmis=5):~~<br><br>~~O parâmetro sign deve informado no QR-Code~~<br><br>**Exceção:** Esta regra fica mantida apenas para SEFAZ MG | ~~Obrig.~~ | ~~853~~ | ~~Rej.~~ | ~~Rejeição: Parâmetro sign não informado no QR Code para emissão em contingência~~ |
| ~~H133~~ | ~~Se tipo de emissão for igual FS-DA (tpEmis=5):~~<br><br>~~Valor da assinatura (sign) do QR-Code difere do valor calculado~~<br><br>**Exceção:** Esta regra fica mantida apenas para SEFAZ MG | ~~Obrig.~~ | ~~855~~ | ~~Rej.~~ | ~~Rejeição: Assinatura do QR-Code difere do calculado~~ |

> **Revogado/Descontinuado:** texto riscado no original nas regras H004, H005, H131 e H133.
