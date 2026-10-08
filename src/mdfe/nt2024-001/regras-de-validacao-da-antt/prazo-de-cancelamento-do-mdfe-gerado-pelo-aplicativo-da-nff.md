# Prazo de Cancelamento do MDFe gerado pelo aplicativo da NFF

| ID | Regra | Obrigatoriedade | Código | Ação | Mensagem |
|---|---|---|---|---|---|
| K04 | Verificar MDFe autorizado há mais de 24 horas<br><br>**Observação**: Exceto se existir evento de Manifestação do Fisco do tipo “Liberação do Prazo de Cancelamento”<br><br>**Exceção:** Não aplicar validação para MDFe emitido com a indicação de carregamento posterior (indCarregaPosterior=1) e não possuir evento de inclusão de DF-e<br><br><mark>**Exceção 2:** Para MDFe com tipo de emissão NFF (tpEmis=3) o prazo concedido será de 168 horas</mark> | Obrig. | 220 | Rej. | Rejeição: MDFe autorizado há mais de 24 horas |
