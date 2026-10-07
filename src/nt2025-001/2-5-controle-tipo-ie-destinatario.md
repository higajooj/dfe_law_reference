<!-- p.7 -->
# 02.5 Controle do Tipo da IE do Destinatário (campo indIEDest)

Atualmente o campo “indIEDest” pode ser informado com os valores:

- 1-Contribuinte normal de ICMS na UF do Destinatário (informar a IE do destinatário);
- 2-Contribuinte isento de Inscrição no Cadastro de Contribuintes da UF do Destinatário;
- 9-Não Contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes de ICMS na UF do Destinatário.

Notamos que a informação do campo não é clara para as empresas, com muitos casos de divergência para o mesmo destinatário na UF. Algumas situações de divergência são:

- Empresa informa a IE do Destinatário e o campo indIEDest=”9-Não Contribuinte”, mesmo que o Contribuinte seja um Contribuinte Normal na UF do Destinatário;
- Empresa informa a IE do Destinatário e o campo indIEDest=”1-Contribuinte Normal”, para Não Contribuinte (que pode ter ou não a IE).

Até pouco tempo atrás, algumas UF não concediam IE para Empresas MEI, caracterizando a situação de “Contribuinte Isento de Inscrição”. Atualmente, praticamente todas as UF concedem IE para MEI, reduzindo as UF que aceitam a situação de “Contribuinte Isento de Inscrição”.

Nesta NT, são alteradas as Regras de Validação que efetuam o controle sobre o campo “indIEDest”, evitando as situações de divergência reportadas.
