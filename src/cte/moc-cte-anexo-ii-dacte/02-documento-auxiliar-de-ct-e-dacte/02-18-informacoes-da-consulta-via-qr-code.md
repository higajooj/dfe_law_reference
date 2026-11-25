<!-- p.14 -->

# 2.18. Informações da consulta via QR Code

A imagem do QR Code gerada/impressa no DACTE deve ter tamanho mínimo 25 mm x 25 mm, sendo 22mm de conteúdo para 3mm de margem segura (quiet zone), para dimensões superiores a 25mm, considerar a margem segura de 10% da dimensão total.

O conteúdo QR Code deverá ser informado no arquivo XML do conhecimento em campo específico, conforme descrito no MOC (tag: qrCodCTe), levando em consideração as especificações para a geração do QR Code para CT-e com emissão normal e as modificações necessárias para a emissão em contingência.

![Exemplo de QR Code](../img/d2-fig-qrcode-exemplo.png)

## 2.18.1. Dimensões mínimas do QR Code

A dimensão mínima para a imagem do QR Code será 25mm X 25mm (sendo 22mm de conteúdo para 3 mm de margem segura (quiet zone)), tendo em vista ter sido a menor dimensão que se conseguiu leitura em dispositivos móveis que não possuem zoom (aproximação de imagem). Para dimensões superiores a 25mm, considerar a margem segura de 10% da dimensão total.

A margem de segurança é necessária para a melhor leitura do QR Code, caso ela não seja respeitada podem ocorrer erros de leitura.
