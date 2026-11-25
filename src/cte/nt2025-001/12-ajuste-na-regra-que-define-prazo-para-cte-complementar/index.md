<!-- p.20 -->

# 12 Ajuste na regra que define prazo para CTe Complementar

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G161a/H102a** Se Tipo do CTe= 1 (Complementar), para cada chave de CTe informado:<br>Verificar se o Ano/Mês da chave de acesso são anteriores a 12 meses da Data de Autorização do CTe<br><br>**Exceção**: Em caso de modal ferroviário ou multimodal permitir até 24 meses da Data de Autorização do CTe | Obrig. | 933 | Rej. | Rejeição: Chave de acesso do CTe complementado muito antiga<br>[chCTe:<br>99999999999999999999999999999999999999999999]|
