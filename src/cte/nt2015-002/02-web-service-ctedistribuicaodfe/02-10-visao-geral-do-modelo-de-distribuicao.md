<!-- p.13 -->

# 2.10 Visão Geral do Modelo de Distribuição

O modelo de distribuição de documentos é baseado na geração de um número sequencial único (*NSU*) para cada CNPJ ou CPF. O fluxo abaixo exemplifica a geração do *NSU* para o emitente e destinatário do CT-e:

```mermaid
flowchart LR
  subgraph E[Emitente]
    n1["1. Emite CT-e"]
    n4["4. Gerar evento de emitente"]
    n8["8. Consulta CTeDistribuicaoDFe"]
  end
  subgraph A[Ambiente Nacional]
    n2["2. Gera NSU para o destinatário do CT-e"]
    n5["5. Gera NSU para o destinatário como evento do emitente"]
    n7["7. Evento do fisco gera NSU para emitente e destinatário"]
  end
  subgraph D[Destinatário]
    n3["3. Consulta CTeDistribuicaoDFe"]
    n6["6. Consulta CTeDistribuicaoDFe"]
    n9["9. Consulta CTeDistribuicaoDFe"]
  end
  n1 -- "NF-e" --> n2
  n2 -- "NF-e – NSU 1" --> n3
  n4 -- "Evento Emitente" --> n5
  n5 -- "Evento Emitente – NSU 2" --> n6
  n7 -- "Evento Fisco – NSU 3" --> n8
  n7 -- "Evento Fisco – NSU 3" --> n9
```

A consulta no *Web Service* CTeDistribuicaoDFe poderá ser realizada a qualquer instante pela empresa ou pessoa. O Ambiente Nacional disponibilizará para consulta os documentos de interesse de cada ator. Seguem os passos do fluxo exemplificado:

1. O emitente gera e transmite um CT-e que será autorizada pela Sefaz e compartilhada com o Ambiente Nacional;

<!-- p.14 -->

2. O Ambiente Nacional gera um NSU para o emitente, um NSU para destinatário e um NSU para cada um dos papéis relacionados no CT-e e o disponibiliza para consulta;
3. O destinatário consulta o WS CTeDistribuicaoDFe a partir do último NSU recebido e recupera o XML do CT-e;
4. O emitente gera um evento de seu CT-e (ex.: evento de cancelamento de CT-e, caso não exista outro evento que impeça este cancelamento) que será compartilhado pela Sefaz com o Ambiente Nacional;
5. O Ambiente Nacional gera um NSU para o cada um dos papéis relacionados com o CT-e para o evento gerado pelo emitente e o disponibiliza para consulta;
6. O destinatário consulta o WS CTeDistribuicaoDFe a partir do último NSU recebido e recupera o evento gerado pelo emitente;
7. O Ambiente Nacional recebe um evento gerado pelo fisco e gera um NSU para o emitente, outro NSU para o destinatário (e tantos NSU quantos forem os papéis relacionados), disponibilizando-os para consulta;
8. Tanto o emitente quanto o destinatário consultam o WS CTeDistribuicaoDFe a partir do último NSU recebido e recuperam o evento gerado pelo fisco;
