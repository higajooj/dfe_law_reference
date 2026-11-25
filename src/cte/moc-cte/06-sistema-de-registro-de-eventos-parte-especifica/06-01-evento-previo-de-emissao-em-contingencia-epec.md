<!-- p.58 -->

# 6.1. Evento Prévio de Emissão em Contingência (EPEC)

**Função**: evento destinado ao atendimento de solicitações de emissão em contingência de CTe.

**Autor do Evento**: O autor do evento é o emissor do CTe. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base do Emissor do CTe.

**Modelo**: CTe de Transporte de Cargas (modelo 57)

**Código do Tipo de Evento**: 110113 (Este evento não exige CTe autorizado)

**Schema XML**: evEPECCTe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **IP01** | **evEPECCTe** | **G** | **-** | **-** | **1-1** | **-** | **Schema XML de validação do evento EPEC 110113** |
| IP02 | descEvento | E | IP01 | C | 1-1 | 4 | Descrição do Evento - “EPEC” |
| IP04 | xJust | E | IP01 | C | 1-1 | 15-255 | Informar a justificativa da entrada em contingência |
| IP05 | vICMS | E | IP01 | N | 1-1 | 13,2 | Valor do ICMS: vICMS, vICMSRet ou vICMSOutraUF |
| IP06 | vICMSST | E | IP01 | N | 0-1 | 13,2 | Valor do ICMS ST |
| IP07 | vTPrest | E | IP01 | N | 1-1 | 13,2 | Valor Total da Prestação do Serviço |
| IP08 | vCarga | E | IP01 | N | 1-1 | 13,2 | Valor Total da carga |
| **IP09** | **Toma4** | **G** | **IP01** | **-** | **1-1** | **-** | **Grupo de informações do tomador** |
| IP10 | Toma | E | IP09 | N | 1-1 | 1 | Tipo de tomador do serviço, preencher com:<br>0-Remetente;<br>1-Expedidor;<br>2-Recebedor;<br>3-Destinatário;<br>4-Outro |
| IP11 | UF | E | IP09 | C | 1-1 | 2 | UF do Tomador do Serviço |
| IP12 | CNPJ | CE | IP09 | N | 1-1 | 14 | CNPJ do Tomador |
| IP13 | CPF | CE | IP09 | N | 1-1 | 11 | CPF do Tomador |
| IP14 | IE | E | IP09 | C | 0-1 | 0-14 | Informar a IE do tomador ou ISENTO se tomador é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o tomador não seja contribuinte do ICMS não informar o conteúdo. |
| IP15 | modal | E | IP01 | N | 1-1 | 2 | Modal de transporte, preencher com:<br>01-Rodoviário;<br>02-Aéreo;<br>03-Aquaviário;<br>04-Ferroviário;<br>05-Dutoviário;<br>06-Multimodal; |
| IP16 | UFIni | E | IP01 | C | 1-1 | 2 | UF de início da prestação |
| IP17 | UFFIm | E | IP01 | C | 1-1 | 2 | UF de fim da prestação |
| IP18 | tpCTe | E | IP01 | C | 1-1 | | Tipo do CTe, informar obrigatoriamente CTe do Tipo Normal = 0 |
| IP19 | dhEmi | E | IP01 | D | 1-1 | | Data e hora de emissão do CTe |

<!-- p.59 -->

## 6.1.1 Validação das Regras Específicas do Evento

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **O01** Verificar se o nSeqEvento é maior que o valor permitido (=1) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| **O02** Verificar se ambiente de autorização é Normal.<br>OBS: Eventos EPEC somente serão aceitos em SVC. | Obrig. | 653 | Rej. | Rejeição: Tipo de evento não é permitido em ambiente de autorização Normal |
| **O03** Verificar se tipo de emissão da chave de acesso é EPEC (tpEmis=4) | Obrig. | 680 | Rej. | Rejeição: Tipo de Emissão diferente de EPEC |
| **O04** Verificar se Mês e Ano da chave de acesso são inferiores a data do Evento | Obrig. | 695 | Rej. | Rejeição: CTe com emissão anterior ao evento prévio (EPEC) |
| **O05** Emitente deve estar habilitado na base de dados para emissão do CTe<br><br>**Observação**: Se evento gerado por PAA (grupo: infPAA) verificar se o CNPJ do emitente está em situação ativa no cadastro do CNPJ MEI da RFB | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do CTe |
| **O06** Acesso BD CHAVES-SVC (Chave: UF, CNPJ Emit, Modelo, Série, Nro):<br>- Já existe CTe com esta numeração<br><br>**Observação**: Buscar o CTe autorizado no ambiente normal na base de chaves naturais compartilhadas para uso da SVC. | Obrig. | 638 | Rej. | Rejeição: Já existe CTe autorizado com esta numeração |
| **O07** Acesso BD Eventos CTE:<br>- Existe evento do tipo EPEC emitido há mais de 7 dias (168h) para o mesmo CNPJ Emitente sem a emissão do CTe correspondente à chave de acesso no ambiente normal de autorização.<br><br>**Observação**: Buscar na base de chaves naturais compartilhadas para uso da SVC. Recomenda-se que a SEFAZ retorne à quantidade de EPEC pendentes e a chave da EPEC mais antiga nessa situação<br><br>**Considerar EPEC pendente apenas se não existir evento de Manifestação do Fisco do tipo Liberação de EPEC para a Chave de acesso informada** | Obrig. | 639 | Rej. | Rejeição: Existe EPEC emitido há mais de 7 dias (168h) sem a emissão do CTe no ambiente normal de autorização |
| **O08** Data/Hora de Emissão posterior à Data/Hora de Recebimento<br>(A SEFAZ Virtual deve considerar a hora local do emissor para a validação).<br>A SEFAZ deve tolerar uma diferença máxima de 5 minutos quando a data/hora de emissão for maior que a data de recebimento, em função da sincronização de horário de servidores.<br>OBS: Essa Validação deve considerar o novo formato de datas UTC com indicação do timezone. | Obrig. | 212 | Rej. | Rejeição: Data de emissão CTe posterior a data de recebimento |
| **O09** Se IE Tomador informado:<br>- Validar IE do Tomador (erro no dígito de controle)<br><br>Observação: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br><br>Exemplo: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser <!-- p.60 -->padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 448 | Rej. | Rejeição: IE do tomador inválida |
| **O10** Se IE Tomador informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Tomador) (\*1)<br>- IE deve estar cadastrada | Facult. | 489 | Rej. | Rejeição: IE do tomador não cadastrada |
| **O11** Se IE e CNPJ Tomador informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Tomador) (\*1)<br>- IE deve estar vinculada ao CNPJ | Facult. | 490 | Rej. | Rejeição: IE do tomador não vinculada ao CNPJ |
| **O12** Se IE Tomador = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (\*1)<br>- Tomador possui IE ativa na UF | Facult. | 719 | Rej. | Rejeição: IE do Tomador não informada |

(\*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes

## 6.1.2 Final do Processamento

Se o evento EPEC for homologado o status de retorno deverá ser cStat=136.

Não existirá cancelamento de eventos EPEC na SVC, e uma vez emitido o evento EPEC, este será compartilhado com a SEFAZ Autorizadora Normal pelo Ambiente Nacional.

Caso o contribuinte necessite cancelar uma operação emitida por engano em contingência EPEC na SVC, deverá primeiro autorizar o CTe (com tpEmis=4) na SEFAZ Autorizadora Normal e, logo em seguida, efetuar o seu cancelamento.

O Fisco poderá liberar uma EPEC de sua conciliação através do evento de Manifestação do Fisco do tipo “Liberação de EPEC”.
