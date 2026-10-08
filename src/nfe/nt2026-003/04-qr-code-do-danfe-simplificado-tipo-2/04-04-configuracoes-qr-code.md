<!-- p.20 -->
# 4.4. Configurações para QR Code

O QR Code permite algumas configurações adicionais conforme descrito a seguir:

<!-- p.21 -->

## 4.4.1. Capacidade de armazenamento

As configurações para capacidade de armazenamento de caracteres do QR Code:

1. Numérica - máx. 7089 caracteres
2. Alfanumérica - máx. 4296 caracteres
3. Binário (8 bits) - máx. 2953 bytes
4. Kanji/Kana - máx. 1817 caracteres

Fonte: http://en.wikipedia.org/wiki/QR_code

## 4.4.2. Capacidade de correção de erros

Seguem as configurações para correções de erros do QR Code:

- Nível L (Low) 7% das palavras do código podem ser recuperadas;
- Nível M (Medium) 15% das palavras de código podem ser restauradas;
- Nível Q (Quartil) 25% das palavras de código podem ser restauradas;
- Nível H (High) 30% das palavras de código podem ser restauradas.

Fonte: http:// http://en.wikipedia.org/wiki/QR_code

Para o QR Code do DANFE Simplificado Tipo 2 será utilizado Nível M.

## 4.4.3. Tipo de caracteres

Existem dois padrões de caracteres que podem ser configurados na geração do QR Code, conforme visto abaixo:

1. ISO-8859-1
2. UTF-8

Fonte: http://en.wikipedia.org/wiki/QR_code

Para o QR Code da NF-e será utilizada a opção 2 - UTF-8.

## 4.4.4. URL da Consulta da NF-e via QR-Code no XML - obrigatoriedade

A URL da consulta da NF-e via QR Code deve constar do arquivo da NF-e (XML) no grupo ZX. Informações Suplementares da Nota Fiscal.
