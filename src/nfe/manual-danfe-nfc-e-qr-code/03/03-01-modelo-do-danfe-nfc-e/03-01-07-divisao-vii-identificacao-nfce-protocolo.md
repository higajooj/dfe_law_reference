# 3.1.7 Divisão VII – Informações de Identificação da NFC-e e do Protocolo de Autorização

As informações da divisão VII deverão ser impressas em uma das formas indicadas nas figuras 4 ou 5, devendo conter:

- Número da NFC-e (ID: B08, tag: nNF)
- Série da NFC-e (ID: B07, tag: serie)
- Data e Hora de Emissão da NFC-e (ID: B09, tag: dhEmi), convertida para o horário local (apesar da data de emissão constar no arquivo XML da NFC-e em formato UTC, esta data deverá ser impressa no DANFE NFC-e sempre convertida para o horário local)
- O texto “Protocolo de autorização: ” seguido do número do protocolo de autorização (ID: PR09, tag: nProt) obtido para NFC-e e a data e hora da autorização (ID: PR08, tag: dhRecbto). A data de autorização é fornecida pela SEFAZ no formato UTC e deve ser impressa no DANFE NFCe convertida para o horário local. No caso de emissão em contingência a informação sobre o protocolo de autorização será suprimida.
