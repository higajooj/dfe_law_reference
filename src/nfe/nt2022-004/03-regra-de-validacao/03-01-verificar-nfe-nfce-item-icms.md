<!-- p.7 -->
# 3.1. Verificar se a NF-e/NFC-e tem pelo menos um item sujeito ao ICMS

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| U01-20 | 55/65 | Informado grupo de tributação do ISSQN (id:U01) sem informar nenhum grupo de ICMS (id:N01)<br>Exceção: A critério da UF poderá ser autorizada/vedada a emissão de NF-e/NFC-e que só tenham itens sujeitos ao ISSQN. (NT 2010/010);<br>Parametrizações possíveis:<br>- **0**=Não aceita item de Serviço;<br>- **1**=Aceita item de Serviço;<br>- **2**=Aceita item de Serviço somente na NF-e/NFC-e conjugada (que contenha também itens de ICMS). | Facul. | 592 | Rej. | Rejeição: A NF-e deve ter pelo menos um item de produto sujeito ao ICMS. |
