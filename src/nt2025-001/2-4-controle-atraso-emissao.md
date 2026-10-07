<!-- p.6 -->
# 02.4 Controle do Atraso na Data de Emissão da NF-e

Como orientação geral, a NF-e deve ser emitida e autorizada antes da circulação da mercadoria. Ou seja, devemos ter a emissão “on-line” da NF-e, evitando a manutenção de processos que levam a emissão do documento fiscal a posteriori.

Em relação a Nota Fiscal para Consumidor (NFC-e, modelo 65), se espera um atraso máximo de 5 minutos entre a Data de Emissão da NFC-e pela Empresa em relação a Data da Autorização do documento pelo Fisco.

No caso da NF-e (modelo 55), desde o início do Projeto NFE, é aceita uma Data de Emissão com um atraso de até 30 dias da data atual. Se a Data de Emissão ultrapassar esse limite, a NF-e pode ainda ser autorizada, desde que emitida em contingência, recebendo o cStat="150-Autorizado Uso da NF-e, autorização fora de prazo".

Atualmente o limite de 30 dias de atraso para a NF-e é muito superior ao desejável.

Nesta NT, o limite de prazo fica alterado para 7 dias, respeitando casos previstos em legislação de algumas SEFAZ, considerando também:

- Será mantido a resposta com cStat=”100-Autorizado o uso da NF-e” dentro deste período de até 7 dias, considerando a criticidade do ambiente de autorização (Fisco e Empresas);
- Após o período de 7 dias, a NF-e continuará a ser autorizada normalmente, retornando o cStat=”150-Autorizado Uso da NF-e, autorização fora de prazo”;
  - A critério da UF, após 30 dias (ou outro limite definido pela SEFAZ) somente será aceita NF-e emitida em contingência (tpEmis=2, 4, 5).
