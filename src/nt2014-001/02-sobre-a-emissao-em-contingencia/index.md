# 2. Sobre a Emissão em Contingência

A obtenção da autorização de uso da NF-e é um processo que envolve diversos recursos de infraestrutura, hardware e software. O mau funcionamento ou a indisponibilidade de qualquer um destes recursos pode prejudicar o processo de autorização da NF-e, com reflexos nos negócios do emissor da NF-e que fica impossibilitado de obter a prévia autorização de uso da NF-e exigida na legislação para a impressão do DANFE, necessário para acompanhar a circulação da mercadoria.

A alta disponibilidade é uma das premissas básicas do sistema da NF-e e os sistemas de autorização de NF-e das UF foram construídos para funcionar em regime de 24x7, contudo, existem diversos outros componentes do sistema que podem apresentar falhas e comprometer a disponibilidade dos serviços, exigindo alternativas de emissão da NF-e em contingência.

Atualmente existem as seguintes modalidades de emissão de NF-e:

- **a) Normal** – é o procedimento padrão de emissão da NF-e com transmissão da NF-e para a Secretaria de Fazenda da unidade federada onde o emissor está estabelecido para obter a autorização de uso. O DANFE será impresso em papel comum após o recebimento da autorização de uso da NF-e;
- **b) FS-DA** – Contingência com uso do Formulário de Segurança para impressão de Documento Auxiliar do Documento Fiscal eletrônico – é a alternativa mais simples para a situação em que exista algum impedimento para obtenção da autorização de uso da NF-e, como por exemplo, um problema no acesso à internet ou a indisponibilidade da SEFAZ de origem do emissor. Neste caso, o emissor pode optar pela emissão da NF-e em contingência com a impressão do DANFE em Formulário de Segurança. O envio das NF-e emitidas nesta situação para SEFAZ de origem será realizado quando cessarem os problemas técnicos que impediam a sua transmissão. Cabe ressaltar que a esta modalidade de contingência ainda é possível utilizando-se formulários de segurança para impressor autônomo, nos termos da legislação vigente até 2010, até o final do estoque daqueles formulários;
- **c) EPEC** – Evento Prévio de Emissão em Contingência – é alternativa de emissão de NF-e em contingência com o registro prévio do resumo das NF-e emitidas. O registro prévio das NF-e permite a impressão do DANFE em papel comum. A validade do DANFE está condicionada à posterior transmissão da NF-e para a SEFAZ de Origem;

<!-- p.5 -->
- **d) SVC** – Sefaz Virtual de Contingência – é alternativa de emissão de NF-e em contingência com transmissão da NF-e para uma das Sefaz Virtuais de Contingência. Nesta modalidade de contingência o DANFE pode ser impresso em papel comum e não existe necessidade de transmissão da NF-e para a SEFAZ de origem quando cessarem os problemas técnicos que impediam a transmissão. A utilização da SVC depende de ativação da SEFAZ de origem, o que significa dizer que a SVC só entra em operação quando a SEFAZ de origem estiver com problemas técnicos que impossibilitam a recepção da NF-e.

O EPEC permite à empresa solicitar o registro do "Evento Prévio de Emissão em Contingência" anterior à emissão do documento em si com um leiaute mínimo de informações. O EPEC deve ser enviado para o Ambiente Nacional (AN), utilizando-se o Web Service de Eventos genérico, criado para este fim.

Os principais benefícios deste tipo de contingência são:

- Reduzir custo da emissão em Formulário de Segurança (FS-DA);
- Prover uma rota alternativa em caso de falha da infraestrutura de internet para acesso a SEFAZ Autorizadora, não tendo sido ativada a SEFAZ Virtual de Contingência para a UF;
- Geração de arquivo pequeno, com melhores condições de transmissão, em função de possível problema de largura de banda e outras restrições na transmissão (uso de linha discada, rede de celular, etc).
