<!-- p.23 -->
# 4 Regras de Validação - Serviço Autorização Evento Prévio de Emissão em Contingência

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| **6P31-10** | 55 | Se informada IE do Destinatário:<br>– Acessar Cadastro de Contribuinte da UF (Chave: UF Dest, IE Dest.) (\*5)<br>– IE destinatário não cadastrada | Obrig. | **233** | Rej. | Rejeição: IE do destinatário não cadastrada |
| **6P31-20** | 55 | – Se informado CNPJ do destinatário e IE destinatário não vinculada ao CNPJ (tratar Regime Especial de IE Única) | Obrig. | **234** | Rej. | Rejeição: IE do destinatário não vinculada ao CNPJ |
| **6P31-30** | 55 | – Se informado CPF do destinatário e IE destinatário não vinculada ao CPF (\*7) | Obrig. | 624 | Rej. | Rejeição: IE Destinatário não vinculada ao CPF |
| **6P31-40** | 55 | – Destinatário em situação irregular perante o Fisco, vedada operação na UF (CCC.cSitCNPJ=3-Vedado) | Obrig. | **302** | Rej. | Uso Denegado: Irregularidade fiscal do destinatário |
| <!-- p.24 --> **6P31-43** | 55 | – Destinatário bloqueado na UF (CCC.cSitCNPJ=2-Bloqueado) | Obrig. | 305 | Rej. | Rejeição: Destinatário bloqueado na UF |
| **6P31-46** | 55 | – IE do Destinatário não está ativa na UF (CCC.cSitIE=0-Não habilitado) (\*7) | Obrig. | 306 | Rej. | Rejeição: IE do destinatário não está ativa na UF |
| **6P31-50** | 55 | Se IE Destinatário não informada e informado CNPJ do destinatário:<br>- Acessar Cadastro Contribuinte da UF (Chave: UF-Dest, CNPJ-Dest) (\*6)<br>– Destinatário possui IE ativa na UF (CCC.cSitIE=1-Habilitado) e CCC.IndIEDestOpc = 0 – Obrigatório | Obrig. | **232** | Rej. | Rejeição: IE do destinatário não informada |
| **6P31-60** | 55 | – Destinatário com CNPJ vedado na UF (CCC.cSitCNPJ=3-Vedado) | Obrig. | 303 | Den. | Uso Denegado: Destinatário não habilitado a operar na UF |
| **6P31-63** | 55 | – Destinatário bloqueado na UF (CCC.cSitCNPJ=2-Bloqueado) | Obrig. | 305 | Rej. | Rejeição: Destinatário bloqueado na UF |

(\*5) Validação possível na operação interestadual, ou no ambiente da SEFAZ Virtual, utilizando o CCC-Cadastro Centralizado de Contribuintes. Nota: A validação do destinatário do EPEC não gera denegação, mas simplesmente uma rejeição.  
(\*6) Validação possível na operação interestadual, ou no ambiente da SEFAZ Virtual, utilizando o CCC. Pesquisar todas as IE vinculadas com o CNPJ informado.  
~~(\*7) Algumas UF ainda não cadastraram no CCC os Contribuintes Pessoa Física (IE e CPF). Portanto, o Ambiente de Contingência EPEC que utiliza o CCC para validar o destinatário somente poderá efetuar as validações assinaladas se o Contribuinte (IE e CPF) existir no CCC.~~

> **Revogado/Descontinuado:** texto riscado na fonte, nota (\*7) desta seção.
