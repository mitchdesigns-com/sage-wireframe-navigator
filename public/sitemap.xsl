<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            font-size: 32px;
            margin-bottom: 10px;
            color: #2c3e50;
          }
          .intro {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
          }
          th {
            background-color: #3498db;
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 0.5px;
          }
          td {
            padding: 15px;
            border-bottom: 1px solid #ecf0f1;
          }
          tr:hover {
            background-color: #f8f9fa;
          }
          tr:last-child td {
            border-bottom: none;
          }
          a {
            color: #3498db;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .url-cell {
            word-break: break-all;
            max-width: 500px;
          }
          .stats {
            background: white;
            padding: 15px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .alternates {
            font-size: 12px;
            color: #7f8c8d;
            margin-top: 5px;
          }
          .alternate-link {
            display: inline-block;
            margin-right: 10px;
            padding: 2px 8px;
            background: #ecf0f1;
            border-radius: 3px;
            color: #34495e;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="intro">
            <h1>XML Sitemap</h1>
            <p>This is the XML sitemap for your website. It helps search engines discover and index your pages more efficiently.</p>
            <p><strong>Total URLs:</strong> <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></p>
          </div>

          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Change Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td class="url-cell">
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                    <xsl:if test="xhtml:link">
                      <div class="alternates">
                        <xsl:for-each select="xhtml:link">
                          <span class="alternate-link">
                            <xsl:value-of select="@hreflang"/>: <xsl:value-of select="@href"/>
                          </span>
                        </xsl:for-each>
                      </div>
                    </xsl:if>
                  </td>
                  <td>
                    <xsl:value-of select="concat(substring(sitemap:lastmod, 0, 11), ' ', substring(sitemap:lastmod, 12, 8))"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
