<!-- p.10 -->
# 4. Alterações em Regras de Validação – Web Service de Autorização de NF-e

### Grupo B. Identificação da NF-e (regras B09-40 e B22-30)

O valor “3” para tpEmis não mais identifica emissão utilizando o Sistema de Contingência do Ambiente Nacional.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| B09-40 | 65 | NFC-e com Tipo de Emissão=1-Normal ~~(ou 3-SCAN (NT 2021.002),~~ ou 6-SVC-AN, 7-SVC-RS) e Data-Hora de Emissão com atraso superior a 5 minutos em relação ao horário de recepção na SEFAZ.<br>**Exceção 1**: A critério da UF, a rejeição acima pode ser efetuada para qualquer Tipo de Emissão.<br>**Exceção 2**: A critério da UF, pode ser aceita a NFC-e com Data de Emissão muito atrasada, desde que tenha sido emitida em contingência (tpEmis=4, 9). A NFC-e transmitida para a SEFAZ Autorizadora após o prazo de 24 horas deve retornar cStat=”150- Autorizado Uso da NF-e, autorização fora de prazo”.<br><br>**Observação**: A emissão da NFC-e deve ocorrer de forma on-line, real-time, com uma tolerância de até 5 minutos, devido ao sincronismo de horário do servidor da Empresa e o servidor da SEFAZ Autorizadora. (NT 2015.002) | Obrig. | 704 | Rej. | Rejeição: NFC-e com Data-Hora de emissão atrasada |
| B22-30 | 55/65 | Na autorização pela SEFAZ:<br>• não aceitar o conteúdo tpEmis=~~3-SCAN (NT 2010/004), (NT 2021.002)~~ 6-SVC-AN ou 7-SVC-RS | Obrig. | 570 | Rej. | Rejeição: Tipo de Emissão ~~3,~~ 6 ou 7 só é válido nas contingências SCAN/SVC |

### Grupo C. Identificação do Emitente (regras C02a-04, C02a-10 e C02a-14)

Conforme apresentado no item 2.2, tpEmis é utilizado em conjunto com a série do documento para identificar se o emitente é identificado por CPF ou CNPJ.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| C02a-04 | 65 | Se informado CPF do emitente e tpEmis <> 3-NFF (NT 2021.002):<br>• Se NFC-e (modelo 65) (NT 2015.002) | Obrig. | 337 | Rej. | Rejeição: NFC-e para emitente pessoa física |
| C02a-10 | 55 | Se informado CPF do emitente e tpEmis <> 3-NFF (NT 2021.002):<br>• Série difere da faixa para emitente CPF: 890-899 e 910-969 (NT 2018.001 / NT 2015.002) | Obrig. | 495 | Rej. | Rejeição: CPF do Emitente com Série incompatível |
| C02a-14 | 55 | Se informado CPF do Emitente e tpEmis <> 3-NFF (NT 2021.002):<br>• Série difere da faixa para emitente CPF: 890-899 e 910-919<br><br>**Observação**: Regra de validação opcional a critério da UF. Permite a emissão de NF-e por pessoa física, somente no serviço de Nota Fiscal Avulsa no site da UF. (NT 2018.001) | Obrig. | 407 | Rej. | Rejeição: CPF do Emitente somente no serviço de Nota Fiscal Avulsa no site do Fisco |

<!-- p.11 -->
### Grupo E: Identificação do Destinatário (regra E04-20)

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| E04-20 | Se tag:tpAmb (id:B24) = 2: O xNome (E04) deve ser informado com a literal “NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL” (NT 2011/002)<br>Exceção: Não se aplica para tpEmis = 3-NFF (NT 2021.002) | Obrig. | 598 | Rej. | Rejeição: NF-e emitida em ambiente de homologação com Razão Social do destinatário diferente de NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL |

### Grupo F: Validação da Assinatura Digital (regra F03)

O arquivo XML da NF-e será gerado pelo Portal Nacional da NFF; por este motivo, se tpEmis=3 (NF-e emitida ao abrigo do regime especial NFF), o certificado digital utilizado para assinar o arquivo XML somente poderá ser da Sefaz Virtual do Rio Grande do Sul (SVRS).

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| F03 | Se Certificado de Assinatura com CNPJ e CNPJ do Certificado difere do CNPJ da SEFAZ para a UF:<br>CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital (NT 2018.001)<br>Exceção: Para tpEmis = 3-NFF, CNPJ do certificado é somente o da SVRS (NT 2021.002) | Obrig. | 213 | Rej. | Rejeição: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital |
| F03A | Se Certificado de Assinatura com CPF:<br>- CPF do Emitente difere do CPF do Certificado Digital (NT 2018.001)<br>Exceção: Para tpEmis = 3-NFF, CNPJ do certificado é somente o da SVRS (NT 2021.002) | Obrig. | 227 | Rej. | Rejeição: CPF do Emitente difere do CPF do Certificado Digital |

<!-- p.12 -->
### Grupo N: Item / Tributo: ICMS (regras N12-85, N12-86, N12-94, N12-98)

O código do benefício (“cBenef”) será tratado no Portal Nacional da NFF.

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| N12-85 | Se informado CST e não informado código de benefício fiscal:<br>- Verificar se CST exige código de benefício fiscal (tag: cBenef), conforme tabela de código de benefício fiscal por UF publicada no Portal da Secretaria de Fazenda da respectiva UF.<br><br>**Observação 1**: Implementação a critério da UF, por modelo de DF-e e por CST.<br><br>**Observação 2**: Para o CST informado, o sistema autorizador apenas verifica se existe qualquer cBenef na tabela publicada no Portal da Secretaria de Fazenda da respectiva UF, sem verificar a compatibilidade.<br><br>**Exceção 1**: a RV não se aplica quando Finalidade de emissão da NFe (tag: finNFe) igual a Devolução de Mercadoria e Identificador de local de destino da operação (tag: idDest) igual a Operação interestadual ou com o Exterior;<br><br>**Exceção 2**: a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a Devolução de Mercadoria;<br><br>**Exceção 3**: a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a NF-e de Ajuste;<br><br>**Exceção 4**: a critério da UF, a RV não se se aplica quando Tipo de Operação (tag: tpNF) igual à Entrada. (NT 2019.001 v1.50);<br><br>**Exceção 5**: Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002). | Facul. | 930 | Rej. | Rejeição: CST com benefício fiscal e não informado o código de benefício fiscal [nItem: nnn] |
| N12-86<!-- p.13 --> | Se informado CST e informado código de benefício fiscal:<br>- Verificar se CST não possui código de benefício fiscal, conforme tabela de código de benefício fiscal por UF publicada no Portal da Secretaria de Fazenda da respectiva UF.<br><br>**Observação 1**: Implementação a critério da UF, por modelo de DF-e e CST.<br><br>**Observação 2**: Para o CST informado, o sistema apenas verifica se não existe qualquer cBenef na tabela publicada no Portal da Secretaria de Fazenda da respectiva UF, sem verificar a compatibilidade.<br><br>**Exceção 1**: a RV não se aplica quando Finalidade de emissão da NFe (tag: finNFe) igual a Devolução de Mercadoria e Identificador de local de destino da operação (tag: idDest) igual a Operação interestadual ou com o Exterior.<br><br>**Exceção 2**: a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a Devolução de Mercadoria;<br><br>**Exceção 3**: a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a NF-e de Ajuste;<br><br>**Exceção 4**: a critério da UF, a RV não se aplica quando Tipo de Operação (tag: tpNF) igual à Entrada. (NT 2019.001 v1.50);<br><br>**Exceção 5**: Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002). | Facul. | 928 | Rej. | Rejeição: Informado código de benefício fiscal para CST sem benefício fiscal [nItem: nnn] |
| N12-94 | Se informado CST e informado código de benefício fiscal:<br>- Verificar se código de benefício fiscal corresponde ao CST informado, conforme tabela de código de benefício fiscal por UF publicada no Portal da Secretaria de Fazenda da respectiva UF.<br><br>**Observação**: Implementação a critério da UF, por modelo de DF-e e por CST.<br><br>**Exceção 1**: a RV não se aplica quando Finalidade de emissão da NFe (tag: finNFe) igual a Devolução de Mercadoria e Identificador de local de destino da operação (tag: idDest) igual a Operação interestadual ou com o Exterior.<br><br>**Exceção 2**: a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a Devolução de Mercadoria;<br><br>**Exceção 3**: a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a NF-e de Ajuste;<br><br>**Exceção 4**: a critério da UF, a RV não se aplica quando Tipo de Operação (tag: tpNF) igual à Entrada;<br><br>**Exceção 5**: Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002). | Facul. | 931 | Rej. | Rejeição: Informado código de benefício fiscal incompatível com CST e UF [nItem: nnn] |

**Nota:** Para itens sem benefício fiscal, a UF poderá exigir a informação da literal “SEM CBENEF” para alguns CST, vide tabela publicada no Portal da Secretaria de Fazenda da respectiva UF.

<!-- REVISAR p.13: na fonte, a nota acima aparece em duas versões sobrepostas (a segunda diz "Portal Nacional Fazenda da respectiva UF"); transcrita a versão completa. -->

<!-- p.14 -->
| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| N12-98 | Se informado código de benefício fiscal:<br>- Verificar se código de benefício fiscal existe e está vigente, conforme tabela de código de benefício fiscal por UF publicada no Portal da Secretaria de Fazenda da respectiva UF.<br><br>**Observação**: Implementação a critério da UF e por modelo de DF-e.<br><br>**Exceção 1**: a RV não se aplica quando Finalidade de emissão da NFe (tag: finNFe) igual a Devolução de Mercadoria e Identificador de local de destino da operação (tag: idDest) igual a Operação interestadual ou com o Exterior.<br><br>**Exceção 2**: a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a Devolução de Mercadoria;<br><br>**Exceção 3**: a critério da UF, a RV não se aplica quando Finalidade de emissão da NF-e (tag: finNFe) igual a NF-e de Ajuste;<br><br>**Exceção 4**: a critério da UF, a RV não se aplica quando Tipo de Operação (tag: tpNF) igual à Entrada.<br><br>**Exceção 5**: essa RV não se aplica quando informado CSOSN (operação realizada por optante pelo Simples Nacional). (NT2019.001 v1.50)<br><br>**Exceção 6**: Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002). | Facul. | 946 | Rej. | Rejeição: Informado código de benefício fiscal incorreto ou inexistente na UF [nItem: nnn] |

### Grupo BA: Documento Fiscal Referenciado (regra BA02-30)

A Chave de Acesso de NF-e emitida ao abrigo da NFF (tpEmis=3) possui uma regra de formação onde a série não identifica se a Chave de Acesso contém um CPF ou CNPJ. É necessário identificar essa informação de uma forma alternativa.

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| BA02-30 | Se informada uma NF-e referenciada (tag:refNFe):<br>- Série = [0-909] e CNPJ zerado ou dígito inválido, ou<br>- Série = [910-969] e CPF zerado ou dígito inválido (NT 2018.001)<br>Nota: Caso tpEmis = 3-NFF, considerar o 5º dígito do número da nota (nNF) para determinar se CNPJ/CPF na Chave de Acesso:<br>CNPJ: 5º dígito do nNF = “1” , CPF: 5º dígito do nNF = “2” (NT 2021.002). | Facul. | 552 | Rej. | Rejeição: Chave de Acesso referenciada com CNPJ/CPF inválido[nOcor:nnn] |

### Grupo ZD. Informações do Responsável Técnico (regras ZD01-10 e ZD02-10)

O arquivo XML da NF-e será gerado pelo Portal Nacional da NFF; por este motivo, se tpEmis=3 (NF-e emitida ao abrigo do regime especial NFF), não se aplicam as validações deste grupo.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZD01-10<!-- p.15 --> | 55/65 | Não informado o grupo de informações do responsável técnico<br>**Observação**: Implementação futura, exceto as UF de AM, MS, PE, PR, SC e TO, nas quais estas regras já estão em vigor em ambiente de teste e entrarão em vigor em ambiente de produção no dia 03 de junho de 2019 (NT 2018.005 v 1.30)<br>**Exceção**: Não se aplica para NFF (tpEmis = 3-NFF), pois neste caso não é informado o grupo Informações do Responsável Técnico (NT 2021.002) | Facul. | 972 | Rej. | Rejeição: Obrigatória as informações do responsável técnico |
| ZD02-10 | 55/65 | Se informado CNPJ do responsável técnico e CNPJ inválido (NT 2021.002)<br>CNPJ com zeros, nulo ou DV inválido<br>**Observação**: Implementação futura, exceto as UF de AM, MS, PE, PR, SC e TO, nas quais estas regras já estão em vigor em ambiente de teste e entrarão em vigor em ambiente de produção no dia 03 de junho de 2019 (NT 2018.005 v 1.30) | Facul. | 973 | Rej. | Rejeição: CNPJ do responsável técnico inválido |
| ZD07-10 | 55/65 | Obrigatória a informação do identificador do CSRT (tag: idCSRT) e Hash do CSTR (tag: hashCSRT)<br>**Observação**: Implementação futura, todas as UFs (NT 2018.005 v1.30)<br>**Exceção**: Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002) | Facul. | 975 | Rej. | Rejeição: Obrigatória a informação do identificador do CSRT e do Hash do CSRT |

### Grupo ZX. Informações Suplementares da Nota Fiscal (regra ZX02-10)

(previsão para quando for possível emitir NFC-e ao abrigo da NFF)

O app NFF não gera impressão de DANFE NFC-e; portanto, não há também a geração do QR-Code correspondente.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZX02-10 | 65 | Não informado o campo de QR-Code para a NFC-e.<br>**Exceção 1**: A regra de validação não se aplica, em produção, para Nota Fiscal com Data de Emissão anterior a 01/04/2016. Não sendo informado o QR-Code não se aplicam as demais validações relacionadas com este campo. (NT 2015.002)<br>**Exceção 2**: Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002) | Obrig. | 394 | Rej. | Rejeição: Nota Fiscal sem a informação do QR-Code |

### Grupo 1. Banco de Dados: Emitente (regras 1C17-10, 1C17-20, 1C17-30, 1C17-34, 1C17-38, 1C17-40, 1C17-60 e 1C17-70)

<!-- p.16 -->As condições tratadas pelas validações realizadas pelas regras 1C17-10, 1C17-20, 1C17-30, 1C17-34, 1C17-38, 1C17-40, 1C17-60 e 1C17-70 são verificadas pelo app NFF em conjunto com o Portal Nacional da NFF, por isto estas regras não se aplicam em caso de emissão ao abrigo da NFF.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 1C17-10 | 55/65 | Se informada IE do Emitente e tpEmis <> 3-NFF (NT 2021.002):<br>– Acessar Cadastro de Contribuinte da UF (Chave: IE Emitente)<br>– IE Emitente não cadastrada | Obrig. | 230 | Rej. | Rejeição: IE do emitente não cadastrada |
| 1C17-20 | 55/65 | – IE Emitente não vinculada ao CNPJ (se informado CNPJ emitente, tratar Regime Especial de IE Única) | Obrig. | 231 | Rej. | Rejeição: IE do emitente não vinculada ao CNPJ |
| 1C17-30 | 55/65 | – IE emitente não vinculada ao CPF (se informado CPF emitente) | Obrig. | 622 | Rej. | Rejeição: IE emitente não vinculada ao CPF |
| 1C17-34 | 55 | – Emitente não autorizado para emissão de NF-e | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão da NF-e |
| 1C17-38 | 65 | – Emitente não autorizado para emissão de NFC-e | Obrig. | 781 | Rej. | Rejeição: Emissor não habilitado para emissão da NFC-e |
| 1C17-40 | 55/65 | – Emitente em situação irregular perante o Fisco<br>**Observação**: o aplicativo emissor de NFF garante que a solicitação de emissão da NF-e é realizada somente para contribuintes ativos; entretanto, como é possível que ocorra um atraso no envio do XML para o ambiente de autorização, nessa situação, de forma excepcional e transitória, poderá acontecer a autorização de uso de uma NF-e para um contribuinte que já não está mais ativo na UF (NT 2021.002) | Obrig. | 301 | Den. | Uso Denegado: Irregularidade fiscal do emitente |
| 1C17-60 | 55/65 | Mensagens opcionais no caso de IE não vinculada ao CNPJ/CPF.<br>– Acessar Cadastro de Pessoa Jurídica ou Pessoa Física:<br>– CNPJ emitente não cadastrado<br>**Exceção**: Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002) | Facul. | 245 | Rej. | Rejeição: CNPJ Emitente não cadastrado |
| 1C17-70 | 55 | Mensagens opcionais no caso de IE não vinculada ao CNPJ/CPF.<br>Acessar Cadastro de Pessoa Jurídica ou Pessoa Física:<br>o CPF Emitente não cadastrado (NT 2011/004)<br>**Exceção**: Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002) | Facul. | 621 | Rej. | Rejeição: CPF Emitente não cadastrado |

### Grupo 5. Banco de Dados: Destinatário (regras 5E17-10, 5E17-20, 5E17-30, 5E17-40, 5E17-43, 5E17-46, 5E17-50, 5E17-60, 5E17-63, 5E17-70 e 5E17-80)

As condições tratadas pelas validações realizadas pelas regras 5E17-10, 5E17-20, 5E17-30, 5E17-40, 5E17-43, 5E17-46, 5E17-50, 5E17-60, 5E17-63, 5E17-70 e 5E17-80 são verificadas pelo app NFF em conjunto com o Portal Nacional da NFF, por isto estas regras não se aplicam em caso de emissão ao abrigo da NFF.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 5E17-10 | 55 | Se informada IE do Destinatário e tpEmis <> 3-NFF (NT 2021.002):<br>- Acessar Cadastro de Contribuinte da UF (Chave: UF Dest, IE Dest.) (*5)<br>- IE destinatário não cadastrada (*7) (NT 2019.001 v1.00) | Obrig. | 233 | Rej. | Rejeição: IE do destinatário não cadastrada |
| 5E17-20 | 55 | – Se informado CNPJ do destinatário e IE destinatário não vinculada ao CNPJ (tratar Regime Especial de IE Única) (NT2019.001) | Obrig. | 234 | Rej. | Rejeição: IE do destinatário não vinculada ao CNPJ |
| 5E17-30 | 55 | – Se informado CPF do destinatário e IE destinatário não vinculada ao CPF (*7) (NT2019.001) | Obrig. | 624 | Rej. | Rejeição: IE Destinatário não vinculada ao CPF |
| 5E17-40<!-- p.17 --> | 55 | – Destinatário em situação irregular perante o Fisco, vedada operação na UF (CCC.cSitCNPJ=3-Vedado) (NT2019.001) | Obrig. | 302 | Den. | Uso Denegado: Irregularidade fiscal do destinatário |
| 5E17-43 | 55 | – Destinatário bloqueado na UF (CCC.cSitCNPJ=2-Bloqueado) (NT2019.001) | Obrig. | 305 | Rej. | Rejeição: Destinatário bloqueado na UF |
| 5E17-46 | 55 | – IE do Destinatário não está ativa na UF (CCC.cSitIE=0-Não habilitado) (*7) (NT2019.001) | Obrig. | 306 | Rej. | Rejeição: IE do destinatário não está ativa na UF |
| 5E17-50 | 55 | Se IE Destinatário não informada e informado CNPJ do destinatário e tpEmis <> 3-NFF (NT 2021.002):<br>- Acessar Cadastro Contribuinte da UF (Chave: UF-Dest, CNPJ-Dest) (*6)<br>- Destinatário possui IE ativa na UF (CCC.cSitIE=1-Habilitado) e CCC.IndIEDestOpc = 0 – Obrigatório (NT2019.001) | Obrig. | 232 | Rej. | Rejeição: IE do destinatário não informada |
| 5E17-60 | 55 | – Destinatário com CNPJ vedado na UF (CCC.cSitCNPJ=3-Vedado) (NT2019.001) | Obrig. | 303 | Den. | Uso Denegado: Destinatário não habilitado a operar na UF |
| 5E17-63 | 55 | – Destinatário bloqueado na UF (CCC.cSitCNPJ=2-Bloqueado) (NT2019.001) | Obrig. | 305 | Rej. | Rejeição: Destinatário bloqueado na UF |
| 5E17-70 | 55 | Mensagens opcionais se informada IE do destinatário e IE não vinculada ao CNPJ/CPF e tpEmis <> 3-NFF (NT 2021.002):<br>- Acessar Cadastro de Pessoa Jurídica ou Pessoa Física:<br>- CNPJ destinatário não cadastrado (NT2019.001) | Facul. | 246 | Rej. | Rejeição: CNPJ Destinatário não cadastrado |
| 5E17-80 | 55 | - CPF destinatário não cadastrado (*7) (NT2019.001) | Facul. | 623 | Rej. | Rejeição: CPF Destinatário não cadastrado |
