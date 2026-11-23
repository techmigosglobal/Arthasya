import {arrow,parentFooter,parentHeader} from './arthasya.js';
import {exportCarousel,exportContact,exportPillars,exportProcessSteps,exportProducts} from './export-data.js';

const breadcrumbs = (current, parent = {href:'/arth.export', label:'Export'}) =>
  `<nav class="arth-breadcrumbs arth-container" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="${parent.href}">${parent.label}</a><span>/</span><span aria-current="page">${current}</span></nav>`;

function exportHeroSlider(){
  return `<section class="arth-slider arth-export-slider" data-slider data-theme="export" tabindex="0" aria-roledescription="carousel" aria-label="Arthasya Export Highlights">
    <div class="arth-slides">
      ${exportCarousel.map((slide, index) => {
        const heading = index === 0 ? 'h1' : 'h2';
        const mediaTag = slide.mediaType === 'video'
          ? `<video class="arth-slide-image" autoplay muted loop playsinline poster="${slide.poster}" aria-label="${slide.alt}"><source src="${slide.src}" type="video/mp4"></video>`
          : `<img class="arth-slide-image" src="${slide.src}" alt="${slide.alt}">`;
        return `<article class="arth-slide${index === 0 ? ' is-active' : ''}" data-slide="${slide.id}" aria-hidden="${index === 0 ? 'false' : 'true'}">
          ${mediaTag}
          <div class="arth-slide-shade"></div>
          <div class="arth-slide-copy">
            <p class="arth-eyebrow">${slide.kicker}</p>
            <${heading}>${slide.title}</${heading}>
            <p>${slide.description}</p>
            <a class="arth-button arth-slide-link" href="${slide.href}">${slide.action} ${arrow}</a>
          </div>
        </article>`;
      }).join('')}
    </div>
    <div class="arth-slider-chrome">
      <div class="arth-slider-controls">
        <button class="arth-slider-arrow" type="button" data-slider-prev aria-label="Previous slide"><span aria-hidden="true">←</span></button>
        <button class="arth-slider-arrow" type="button" data-slider-next aria-label="Next slide"><span aria-hidden="true">→</span></button>
        <button class="arth-slider-pause" type="button" data-slider-pause aria-pressed="false"><span class="arth-pause-icon" aria-hidden="true">Ⅱ</span><span data-pause-label>Pause</span></button>
        <span class="arth-slider-count" aria-live="polite"><strong data-slide-current>01</strong><span>/ 0${exportCarousel.length}</span></span>
      </div>
      <div class="arth-slider-tabs" role="tablist" aria-label="Choose an export slide">
        ${exportCarousel.map((slide, index) => `
          <button type="button" class="arth-slide-tab${index === 0 ? ' is-active' : ''}" data-slide-select="${slide.id}" aria-label="Show ${slide.title}" aria-current="${index === 0 ? 'true' : 'false'}">
            <span>0${index + 1}</span>${slide.kicker}
          </button>
        `).join('')}
      </div>
      <div class="arth-progress" aria-hidden="true"><span data-slide-progress></span></div>
    </div>
  </section>`;
}

export function exportPortalPage(){
  return `<main id="main" class="arth-page arth-export-page" tabindex="-1">
    ${exportHeroSlider()}
    
    <section class="arth-intro arth-container" id="about" aria-labelledby="export-intro-title">
      <div>
        <p class="arth-eyebrow" style="color:#e8752b;">FROM SOURCE TO SHORE</p>
        <h2 id="export-intro-title">Your trusted global sourcing and export partner from India.</h2>
      </div>
      <div class="arth-intro-actions">
        <a class="arth-button" style="--slide-accent:#e8752b;" href="#products">Explore Products ${arrow}</a>
        <a class="arth-text-link" href="#rfq">Request a Quote ${arrow}</a>
      </div>
    </section>

    <section class="arth-container" style="padding-bottom:80px;">
      <p style="font-size:clamp(18px,2vw,24px);line-height:1.55;color:var(--arth-muted);max-width:960px;">
        Arthasya Export is committed to connecting international buyers, spice importers, and food manufacturers directly with trusted producers across India. We combine deep agricultural sourcing expertise, rigorous quality standards, and end-to-end logistics management to deliver premium commodities reliably to global destinations.
      </p>
    </section>

    <section class="arth-page-section arth-container" aria-labelledby="export-pillars-title">
      <p class="arth-eyebrow" style="color:#e8752b;">OUR VALUE PROPOSITION</p>
      <h2 id="export-pillars-title">Built around quality and trust.</h2>
      <div class="arth-page-grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr));">
        ${exportPillars.map(p => `
          <article class="arth-page-card">
            <span class="arth-page-card-index" style="color:#e8752b;">${p.index}</span>
            <h3 style="font-size:24px;margin-top:20px;">${p.title}</h3>
            <p style="font-size:15px;line-height:1.55;color:var(--arth-muted);margin-top:12px;">${p.copy}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="arth-page-section arth-container" id="products" aria-labelledby="products-catalog-title">
      <div class="arth-section-heading">
        <div>
          <p class="arth-eyebrow" style="color:#e8752b;">PRODUCT CATALOG</p>
          <h2 id="products-catalog-title">Spices & commodities.</h2>
        </div>
        <p>Premium agricultural produce prepared for international shipping and commercial food processing.</p>
      </div>

      <div class="export-product-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:28px;margin-top:38px;">
        ${exportProducts.map(p => `
          <article class="export-product-card" style="background:#fff;border:1px solid var(--arth-line);display:flex;flex-direction:column;overflow:hidden;transition:transform .25s ease,box-shadow .25s ease;">
            <div style="aspect-ratio:16/10;overflow:hidden;background:#ebeee8;position:relative;">
              <img src="${p.thumbnail || p.heroImage}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;transition:transform .4s ease;" loading="lazy">
              <span style="position:absolute;top:12px;left:12px;background:#142a32cc;color:#f0b54a;font-size:10px;font-weight:700;letter-spacing:.12em;padding:4px 8px;text-transform:uppercase;">${p.eyebrow}</span>
            </div>
            <div style="padding:26px;display:flex;flex-direction:column;flex:1;">
              <span style="font-size:12px;color:var(--arth-muted);font-style:italic;">${p.botanicalName}</span>
              <h3 style="font-size:24px;margin:8px 0 10px;">${p.name}</h3>
              <p style="font-size:14px;line-height:1.5;color:var(--arth-muted);margin-bottom:18px;">${p.shortDesc}</p>
              <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
                ${p.highlights.slice(0, 3).map(h => `<span style="background:var(--arth-bg);border:1px solid var(--arth-line);padding:4px 8px;font-size:11px;color:var(--arth-ink);font-weight:600;">${h.label}: ${h.value}</span>`).join('')}
              </div>
              <div style="margin-top:auto;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--arth-line);padding-top:16px;">
                <a class="arth-text-link" href="/export/${p.slug}" style="color:#e8752b;font-size:13px;font-weight:700;margin-top:0;">View Specifications ${arrow}</a>
                <a class="button button-teal" href="/export/${p.slug}#rfq" style="padding:6px 14px;font-size:12px;background:#e8752b;color:#fff;">Request Quote</a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="arth-page-section arth-container" id="process" aria-labelledby="process-title">
      <div class="arth-section-heading">
        <div>
          <p class="arth-eyebrow" style="color:#e8752b;">HOW WE OPERATE</p>
          <h2 id="process-title">Our 8-step export process.</h2>
        </div>
        <p>A structured approach keeping sourcing, quality testing, and delivery aligned from initial inquiry to destination discharge.</p>
      </div>

      <div class="export-process-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:38px;">
        ${exportProcessSteps.map(s => `
          <div style="background:#fff;border:1px solid var(--arth-line);padding:24px;position:relative;">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;background:#e8752b;color:#fff;font-weight:700;font-size:15px;margin-bottom:14px;">${s.step}</span>
            <h4 style="font-size:18px;margin-bottom:8px;">${s.title}</h4>
            <p style="font-size:13px;line-height:1.5;color:var(--arth-muted);">${s.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="arth-page-section arth-container" style="background:#142a32;color:#fff;padding:64px var(--arth-gutter);margin-bottom:112px;">
      <div style="max-width:840px;">
        <p class="arth-eyebrow" style="color:#f0b54a;">EXPORT COMPLIANCE & QUALITY CONTROL</p>
        <h2 style="font-size:clamp(32px,4vw,56px);line-height:1.05;margin:14px 0 20px;">International shipping with complete traceability.</h2>
        <p style="color:#d3e1df;font-size:16px;line-height:1.6;margin-bottom:28px;">
          All shipments include comprehensive export documentation: Certificate of Origin, Phytosanitary Certificate, Fumigation Certificate, Packing List, and certified Laboratory Certificate of Analysis (COA) for moisture, aflatoxins, and purity.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;">
          <span style="border:1px solid #ffffff40;padding:8px 16px;font-size:13px;">Phytosanitary Certified</span>
          <span style="border:1px solid #ffffff40;padding:8px 16px;font-size:13px;">Spices Board of India</span>
          <span style="border:1px solid #ffffff40;padding:8px 16px;font-size:13px;">Lab COA Testing</span>
          <span style="border:1px solid #ffffff40;padding:8px 16px;font-size:13px;">FCL & LCL Sea Freight</span>
        </div>
      </div>
    </section>

    <section class="arth-container" id="rfq" aria-labelledby="export-contact-title" style="padding-bottom:112px;">
      <div style="display:grid;grid-template-columns:1fr 1.3fr;gap:48px;">
        <div>
          <p class="arth-eyebrow" style="color:#e8752b;">LET’S CONNECT</p>
          <h2 id="export-contact-title" style="font-size:clamp(34px,4vw,58px);line-height:1.02;margin:14px 0 20px;">Request a quotation or sample.</h2>
          <p style="color:var(--arth-muted);font-size:16px;line-height:1.55;margin-bottom:28px;">
            Looking for a reliable sourcing partner for your next spice shipment? Our team is available to assist with product specifications, samples, and FOB/CIF price quotes.
          </p>
          <div style="background:#fff;border:1px solid var(--arth-line);padding:24px;display:flex;flex-direction:column;gap:14px;">
            <p style="font-size:16px;"><strong>Direct Phone / WhatsApp:</strong><br><a href="tel:${exportContact.phone}" style="color:#e8752b;font-weight:700;font-size:20px;">${exportContact.phoneDisplay}</a></p>
            <p style="font-size:16px;"><strong>Email:</strong><br><a href="mailto:${exportContact.email}" style="color:var(--arth-teal);font-weight:600;">${exportContact.email}</a></p>
            <p style="font-size:14px;color:var(--arth-muted);"><strong>Office:</strong> ${exportContact.address}<br><strong>Hours:</strong> ${exportContact.hours}</p>
          </div>
        </div>

        <form class="arth-enquiry-form" data-enquiry-form="export-rfq" aria-label="Export quotation form">
          <div>
            <p class="arth-eyebrow" style="color:#e8752b;">REQUEST FOR QUOTATION (RFQ)</p>
            <h3 style="font-size:24px;margin-top:6px;">Submit your export requirement</h3>
          </div>
          <label for="rfq-name">Full Name<input id="rfq-name" name="name" required placeholder="Your full name"></label>
          <label for="rfq-email">Business Email<input id="rfq-email" name="email" type="email" required placeholder="buyer@company.com"></label>
          <label for="rfq-phone">Phone / WhatsApp<input id="rfq-phone" name="phone" type="tel" required placeholder="+Country code and number"></label>
          <label for="rfq-product">Product Required
            <select id="rfq-product" name="product" style="width:100%;border:1px solid #142a3240;background:#fff;color:var(--arth-ink);padding:12px;font:inherit;">
              ${exportProducts.map(p => `<option value="${p.name}">${p.name}</option>`).join('')}
              <option value="Other Agricultural Commodities">Other Agricultural Commodities</option>
            </select>
          </label>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
            <label for="rfq-volume">Estimated Volume (MT)<input id="rfq-volume" name="volume" placeholder="e.g. 1 x 20ft FCL (15 MT)"></label>
            <label for="rfq-port">Destination Port<input id="rfq-port" name="port" placeholder="e.g. Rotterdam, Jebel Ali"></label>
          </div>
          <label for="rfq-message">Specifications & Notes<textarea id="rfq-message" name="message" rows="3" placeholder="Provide quality specs, packing requirements, or target delivery timeline..."></textarea></label>
          <button class="arth-button" type="button" data-enquiry-submit style="--slide-accent:#e8752b;justify-content:center;">Submit Export RFQ ${arrow}</button>
          <p class="arth-form-status" data-form-status role="status">Direct support: Call +91 8309103531 or submit. Nothing is sent or stored without personal confirmation.</p>
        </form>
      </div>
    </section>
  </main>`;
}

export function exportProductDetailPage(product){
  return `<main id="main" class="arth-page arth-export-detail-page" tabindex="-1">
    ${breadcrumbs(product.name)}

    <section class="product-hero-split arth-container" style="display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center;padding-top:40px;padding-bottom:80px;">
      <div>
        <span style="display:inline-block;background:#e8752b;color:#fff;font-size:11px;font-weight:700;letter-spacing:.14em;padding:5px 10px;text-transform:uppercase;margin-bottom:14px;">${product.eyebrow}</span>
        <p style="font-size:14px;color:var(--arth-muted);font-style:italic;margin-bottom:8px;">${product.botanicalName}</p>
        <h1 style="font-size:clamp(44px,6vw,84px);line-height:.96;letter-spacing:-.05em;margin-bottom:20px;">${product.name}</h1>
        <p style="font-size:clamp(17px,1.8vw,22px);line-height:1.5;color:var(--arth-muted);margin-bottom:32px;">${product.overview}</p>
        <div style="display:flex;flex-wrap:wrap;gap:14px;">
          <a class="arth-button" style="--slide-accent:#e8752b;" href="#rfq">Request a Quote ${arrow}</a>
          <a class="button" style="border:1px solid var(--arth-line);padding:14px 20px;font-size:14px;font-weight:700;" href="tel:${exportContact.phone}">Call: ${exportContact.phoneDisplay}</a>
        </div>
      </div>
      <div style="aspect-ratio:4/3;overflow:hidden;background:#ebeee8;border:1px solid var(--arth-line);">
        <img src="${product.heroImage}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">
      </div>
    </section>

    <section class="arth-container" style="padding-bottom:80px;">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1px;background:var(--arth-line);border:1px solid var(--arth-line);">
        ${product.highlights.map(h => `
          <div style="background:#fff;padding:24px;">
            <span style="font-size:11px;font-weight:700;letter-spacing:.1em;color:var(--arth-muted);text-transform:uppercase;">${h.label}</span>
            <p style="font-size:20px;font-weight:700;color:var(--arth-ink);margin-top:8px;">${h.value}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="arth-page-section arth-container" aria-labelledby="specs-title">
      <div class="arth-section-heading">
        <div>
          <p class="arth-eyebrow" style="color:#e8752b;">EXPORT SPECIFICATIONS</p>
          <h2 id="specs-title">Technical parameters.</h2>
        </div>
        <p>Lab-verified standards compliant with international import tolerances and food safety norms.</p>
      </div>

      <div style="margin-top:34px;background:#fff;border:1px solid var(--arth-line);overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;font-size:15px;text-align:left;">
          <thead>
            <tr style="background:var(--arth-bg);border-bottom:1px solid var(--arth-line);">
              <th style="padding:16px 20px;font-weight:700;width:38%;">Parameter</th>
              <th style="padding:16px 20px;font-weight:700;">Export Standard Value</th>
            </tr>
          </thead>
          <tbody>
            ${product.specs.map(([key, value], i) => `
              <tr style="border-bottom:1px solid var(--arth-line);background:${i % 2 === 0 ? '#fff' : '#fafaf8'};">
                <td style="padding:14px 20px;font-weight:600;color:var(--arth-ink);">${key}</td>
                <td style="padding:14px 20px;color:var(--arth-muted);">${value}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>

    ${product.varieties ? `
      <section class="arth-page-section arth-container" aria-labelledby="varieties-title">
        <div class="arth-section-heading">
          <div>
            <p class="arth-eyebrow" style="color:#e8752b;">COMMERCIAL VARIETIES</p>
            <h2 id="varieties-title">Grades & options.</h2>
          </div>
          <p>Different crop varieties to meet diverse industrial, cosmetic, and culinary requirements.</p>
        </div>
        <div class="arth-page-grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr));">
          ${product.varieties.map((v, i) => `
            <article class="arth-page-card">
              <span class="arth-page-card-index" style="color:#e8752b;">0${i + 1}</span>
              <h3 style="font-size:22px;margin-top:20px;">${v.name}</h3>
              <p style="font-size:15px;line-height:1.55;color:var(--arth-muted);margin-top:10px;">${v.desc}</p>
            </article>
          `).join('')}
        </div>
      </section>
    ` : ''}

    <section class="arth-container" style="padding-bottom:80px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;">
        <div style="background:#fff;border:1px solid var(--arth-line);padding:32px;">
          <p class="arth-eyebrow" style="color:#e8752b;">PACKAGING & STUFFING</p>
          <h3 style="font-size:24px;margin:10px 0 14px;">Packaging options</h3>
          <p style="color:var(--arth-muted);font-size:15px;line-height:1.6;">${product.packaging}</p>
        </div>
        <div style="background:#fff;border:1px solid var(--arth-line);padding:32px;">
          <p class="arth-eyebrow" style="color:#e8752b;">COMMERCIAL APPLICATIONS</p>
          <h3 style="font-size:24px;margin:10px 0 14px;">Industry usage</h3>
          <p style="color:var(--arth-muted);font-size:15px;line-height:1.6;">${product.applications}</p>
        </div>
      </div>
    </section>

    <section class="arth-container" id="rfq" style="padding-bottom:112px;">
      <div style="background:#fff;border:1px solid var(--arth-line);padding:42px;">
        <div style="max-width:720px;margin-bottom:32px;">
          <p class="arth-eyebrow" style="color:#e8752b;">DIRECT ENQUIRY</p>
          <h2 style="font-size:36px;margin:8px 0 12px;">Request a quote for ${product.name}</h2>
          <p style="color:var(--arth-muted);font-size:16px;">Contact our export specialists for current FOB/CIF pricing, grade availability, and pre-shipment sampling.</p>
        </div>

        <form class="arth-enquiry-form" data-enquiry-form="product-rfq" style="background:transparent;border:0;padding:0;">
          <input type="hidden" name="product" value="${product.name}">
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;">
            <label for="p-name">Full Name<input id="p-name" name="name" required placeholder="Your name"></label>
            <label for="p-email">Business Email<input id="p-email" name="email" type="email" required placeholder="buyer@company.com"></label>
            <label for="p-phone">Phone / WhatsApp<input id="p-phone" name="phone" type="tel" required placeholder="+Country code"></label>
            <label for="p-vol">Quantity / Order Size<input id="p-vol" name="volume" placeholder="e.g. 10 Metric Tons"></label>
          </div>
          <label for="p-msg" style="margin-top:14px;">Requirements & Port of Destination
            <textarea id="p-msg" name="message" rows="3" placeholder="Specify destination port, desired Incoterm (FOB/CIF), and packaging preferences..."></textarea>
          </label>
          <div style="display:flex;align-items:center;gap:20px;margin-top:14px;flex-wrap:wrap;">
            <button class="arth-button" type="button" data-enquiry-submit style="--slide-accent:#e8752b;">Send ${product.name} RFQ ${arrow}</button>
            <span style="font-size:14px;color:var(--arth-muted);">Or call directly: <a href="tel:${exportContact.phone}" style="color:#e8752b;font-weight:700;">${exportContact.phoneDisplay}</a></span>
          </div>
          <p class="arth-form-status" data-form-status role="status">Direct support: Call ${exportContact.phone} or submit. Nothing is sent or stored without personal confirmation.</p>
        </form>
      </div>
    </section>

    <section class="arth-container" style="padding-bottom:112px;">
      <h3 style="font-size:22px;margin-bottom:20px;">Explore other export products</h3>
      <div style="display:flex;flex-wrap:wrap;gap:12px;">
        ${exportProducts.filter(p => p.id !== product.id).map(p => `
          <a href="/export/${p.slug}" style="background:#fff;border:1px solid var(--arth-line);padding:12px 18px;font-size:14px;font-weight:600;display:inline-flex;align-items:center;gap:8px;">
            ${p.name} ${arrow}
          </a>
        `).join('')}
      </div>
    </section>
  </main>`;
}

