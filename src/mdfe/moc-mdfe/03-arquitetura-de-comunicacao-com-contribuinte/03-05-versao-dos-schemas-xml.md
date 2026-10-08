# 3.5 Versão dos Schemas XML

## 3.5.1 Liberação das versões dos schemas para o MDFe

Os schemas válidos para o MDFe serão disponibilizados no site nacional do Projeto (dfe-portal.svrs.rs.gov.br/MDFe), e serão liberados após autorização da equipe de Gestão do Projeto formada pelos Líderes dos Projetos nos Estados e representante das Empresas.

A cada nova liberação de schema será disponibilizado um arquivo compactado contendo o conjunto de schemas a serem utilizados pelos contribuintes para a geração dos arquivos XML. Este arquivo será denominado "Pacote de Liberação" e terá a mesma numeração da versão do Manual de Orientações que lhe é compatível. Os pacotes de liberação serão identificados pelas letras "PL_MDFe", seguida do número da versão do Manual de Orientações correspondente.

Exemplificando: O pacote PL_MDFe_3.00.zip representa o "Pacote de Liberação" de schemas do MDFe compatíveis com o Manual de Orientações do Contribuinte – versão 3.00.

Os schemas XML das mensagens XML são identificados pelo seu nome, seguido da versão do respectivo schema.

Assim, para o schema XML de "mdfe", corresponderá um arquivo com a extensão ".xsd", que terá o nome de "mdfe_v9.99.xsd", onde v9.99, corresponde a versão do respectivo schema.

Para identificar quais os schemas que sofreram alteração em um determinado pacote liberado, deve-se comparar o número da versão do schema deste pacote com o do pacote anterior.

## 3.5.2 Correção de Pacote de Liberação

Em alguma situação pode surgir a necessidade de correção de um Schema XML por um erro de implementação de regra de validação, obrigatoriedade de campo, nome de tag divergente do definido no leiaute da mensagem, que não modifica a estrutura do Schema XML e nem exige a alteração dos aplicativos da SEFAZ ou dos contribuintes.

Nesta situação, divulgaremos um novo pacote de liberação com o Schema XML corrigido, sem modificar o número da versão do PL para manter a compatibilidade com o Manual de Orientações do Contribuinte vigente.

<!-- p.25 -->

A identificação dos pacotes mais recentes se dará com o acréscimo de letras minúscula do alfabeto, como por exemplo: MDFe_PL_3.00a.ZIP, indicando que se trata da primeira versão corrigida do MDFe_PL_3.00.ZIP.

## 3.5.3 Divulgação de novos Pacotes de Liberação

A divulgação de novos pacotes de liberação ou atualizações de pacote de liberação será realizada através da publicação de Notas Técnicas no Portal Nacional do MDFe com as informações necessárias para a implementação dos novos pacotes de liberação.

## 3.5.4 Controle de Versão

O controle de versão de cada um dos schemas válidos do MDFe compreende uma definição nacional sobre:

- Qual a versão vigente (versão mais atualizada)?
- Quais são as versões anteriores ainda suportadas por todas as SEFAZ?
- Quais são as versões da parte específica de cada modal suportadas pela parte genérica?

Este controle de versão permite a adaptação dos sistemas de informática dos contribuintes participantes do Projeto em diferentes datas. Ou seja, alguns contribuintes poderão estar com uma versão de leiaute mais atualizada, enquanto outros poderão ainda estar operando com mensagens em um leiaute anterior.

Não estão previstas mudanças frequentes de leiaute de mensagens e os contribuintes deverão ter um prazo razoável para implementar as mudanças necessárias, conforme acordo operacional a ser estabelecido.

Mensagens recebidas com uma versão de leiaute não suportada serão rejeitadas com uma mensagem de erro específica na versão do leiaute de resposta mais recente em uso.
