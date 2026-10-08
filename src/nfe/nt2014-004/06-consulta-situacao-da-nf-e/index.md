# 6. Consulta Situação da NF-e

Algumas empresas conferem o *Schema* das mensagens de resposta enviadas pelo Serviço de Autorização da SEFAZ. No caso da Consulta Situação da NF-e, se a empresa estiver ainda usando a versão antiga do leiaute (versão 2.01) ela detecta um erro de *Schema* caso a Chave de Acesso consultada corresponda a uma NF-e da nova versão do leiaute (versão 3.10).

Alterado o *Schema* XML da Consulta Situação para não acusar falha de *Schema* nesta situação.
