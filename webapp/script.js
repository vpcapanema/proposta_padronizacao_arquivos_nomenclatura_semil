// Navigation - Active Link
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll and active nav
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Set active nav on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });

    // Generator Type Toggle
    const genType = document.getElementById('gen-type');
    const geoFields = document.getElementById('geo-fields');
    const nonGeoFields = document.getElementById('non-geo-fields');

    if (genType) {
        genType.addEventListener('change', function () {
            if (this.value === 'geoespacial') {
                geoFields.style.display = 'block';
                nonGeoFields.style.display = 'none';
            } else {
                geoFields.style.display = 'none';
                nonGeoFields.style.display = 'block';
            }
        });
    }

    // Set default date to today
    const genData = document.getElementById('gen-data');
    if (genData) {
        const today = new Date().toISOString().split('T')[0];
        genData.value = today;
    }

    // Validator functionality
    const validateBtn = document.getElementById('validate-btn');
    if (validateBtn) {
        validateBtn.addEventListener('click', validateFilename);
    }

    // Generator functionality
    const generateBtn = document.getElementById('generate-btn');
    if (generateBtn) {
        generateBtn.addEventListener('click', generateFilename);
    }

    // Checklist functionality
    const checklistItems = document.querySelectorAll('.checklist-item');
    checklistItems.forEach(item => {
        item.addEventListener('change', function () {
            if (this.checked) {
                this.parentElement.style.backgroundColor = '#E8F5E9';
            } else {
                this.parentElement.style.backgroundColor = '';
            }
        });
    });
});

// Validator Function
function validateFilename() {
    const input = document.getElementById('filename-input').value.trim();
    const fileType = document.querySelector('input[name="file-type"]:checked').value;
    const resultDiv = document.getElementById('validation-result');

    if (!input) {
        showValidationResult(false, 'Por favor, insira um nome de arquivo.', resultDiv);
        return;
    }

    let isValid = false;
    let message = '';
    let details = [];

    if (fileType === 'geoespacial') {
        const pattern = /^[a-z]{3,6}_[a-z]+_[a-z0-9]+_1-\d+k_\d{4}_v\d{2}(\.\d+)?\.[a-z]+$/;
        isValid = pattern.test(input);

        if (isValid) {
            message = 'Nomenclatura válida para arquivo geoespacial!';
            details = [
                'Formato correto: orgao_tema_descricao_escala_ano_versao.extensao',
                'Todos os campos obrigatórios presentes',
                'Escala no formato correto (1-XXXk)',
                'Versão no formato correto (vXX)',
                'Tudo em minúsculas'
            ];
        } else {
            message = 'Nomenclatura inválida para arquivo geoespacial.';
            details = checkGeospatialErrors(input);
        }
    } else {
        const pattern = /^[a-z]{3,6}_[a-z]+_[a-z0-9]+_\d{4}(-\d{2}(-\d{2})?)?_v\d{2}(\.\d+)?\.[a-z]+$/;
        isValid = pattern.test(input);

        if (isValid) {
            message = 'Nomenclatura válida para arquivo não geoespacial!';
            details = [
                'Formato correto: orgao_categoria_descricao_data_versao.extensao',
                'Todos os campos obrigatórios presentes',
                'Data no formato ISO 8601',
                'Versão no formato correto (vXX)',
                'Tudo em minúsculas'
            ];
        } else {
            message = 'Nomenclatura inválida para arquivo não geoespacial.';
            details = checkNonGeospatialErrors(input);
        }
    }

    showValidationResult(isValid, message, resultDiv, details);
}

function checkGeospatialErrors(input) {
    const errors = [];

    // Check for spaces
    if (input.includes(' ')) {
        errors.push('❌ Contém espaços (use underscore _)');
    }

    // Check for accents
    if (/[áéíóúãõâêôàç]/i.test(input)) {
        errors.push('❌ Contém acentos (remova acentuação)');
    }

    // Check if starts with uppercase
    if (!/^[A-Z]/.test(input)) {
        errors.push('❌ Deve começar com letra maiúscula (ORGAO)');
    }

    // Check for scale format
    if (!/1-\d+k/.test(input)) {
        errors.push('❌ Escala deve estar no formato 1-XXXk');
    }

    // Check for year
    if (!/\d{4}/.test(input)) {
        errors.push('❌ Ano deve ter 4 dígitos (AAAA)');
    }

    // Check for version
    if (!/v\d{2}/.test(input)) {
        errors.push('❌ Versão deve estar no formato vXX (ex: v01)');
    }

    // Check extension
    if (!/\.[a-z]+$/.test(input)) {
        errors.push('❌ Extensão deve estar em minúsculas');
    }

    // Check structure
    const underscoreCount = (input.match(/_/g) || []).length;
    if (underscoreCount < 5) {
        errors.push('❌ Faltam campos obrigatórios (deve ter 6 partes separadas por _)');
    }

    if (errors.length === 0) {
        errors.push('⚠️ Verifique se todos os campos seguem o padrão exato');
    }

    return errors;
}

function checkNonGeospatialErrors(input) {
    const errors = [];

    // Check for spaces
    if (input.includes(' ')) {
        errors.push('❌ Contém espaços (use underscore _)');
    }

    // Check for accents
    if (/[áéíóúãõâêôàç]/i.test(input)) {
        errors.push('❌ Contém acentos (remova acentuação)');
    }

    // Check if has uppercase
    if (/[A-Z]/.test(input)) {
        errors.push('❌ Contém letras maiúsculas (use apenas minúsculas)');
    }

    // Check for date format
    if (!/\d{4}(-\d{2}(-\d{2})?)?/.test(input)) {
        errors.push('❌ Data deve estar no formato AAAA-MM-DD, AAAA-MM ou AAAA');
    }

    // Check for version
    if (!/v\d{2}/.test(input)) {
        errors.push('❌ Versão deve estar no formato vXX (ex: v01)');
    }

    // Check extension
    if (!/\.[a-z]+$/.test(input)) {
        errors.push('❌ Extensão deve estar em minúsculas');
    }

    // Check structure
    const underscoreCount = (input.match(/_/g) || []).length;
    if (underscoreCount < 4) {
        errors.push('❌ Faltam campos obrigatórios (deve ter 5 partes separadas por _)');
    }

    if (errors.length === 0) {
        errors.push('⚠️ Verifique se todos os campos seguem o padrão exato');
    }

    return errors;
}

function showValidationResult(isValid, message, resultDiv, details = []) {
    resultDiv.className = 'validation-result show ' + (isValid ? 'valid' : 'invalid');

    const icon = isValid ? '✓' : '✗';
    const iconColor = isValid ? '#28A745' : '#DC3545';

    let html = `
        <h4><i class="fas fa-${isValid ? 'check' : 'times'}-circle"></i> ${message}</h4>
    `;

    if (details.length > 0) {
        html += '<ul style="margin-top: 15px; list-style: none; padding-left: 0;">';
        details.forEach(detail => {
            html += `<li style="padding: 5px 0;">${detail}</li>`;
        });
        html += '</ul>';
    }

    resultDiv.innerHTML = html;
}

// Generator Function
function generateFilename() {
    const tipo = document.getElementById('gen-type').value;
    const orgao = document.getElementById('gen-orgao').value;
    const descricao = document.getElementById('gen-descricao').value.trim();
    const versao = document.getElementById('gen-versao').value.trim();
    const extensao = document.getElementById('gen-extensao').value.trim();
    const resultDiv = document.getElementById('generated-result');

    // Validate inputs
    if (!descricao) {
        showGeneratedResult('Por favor, preencha a descrição.', resultDiv, false);
        return;
    }

    if (!versao.match(/^v\d{2}(\.\d+)?$/)) {
        showGeneratedResult('Versão deve estar no formato vXX ou vXX.X (ex: v01 ou v01.1)', resultDiv, false);
        return;
    }

    if (!extensao) {
        showGeneratedResult('Por favor, informe a extensão do arquivo.', resultDiv, false);
        return;
    }

    let filename = '';

    if (tipo === 'geoespacial') {
        const tema = document.getElementById('gen-tema').value.toLowerCase();
        const escala = document.getElementById('gen-escala').value;
        const ano = document.getElementById('gen-ano').value;

        filename = `${orgao.toLowerCase()}_${tema}_${descricao.toLowerCase()}_${escala}_${ano}_${versao}.${extensao.toLowerCase()}`;
    } else {
        const categoria = document.getElementById('gen-categoria').value.toLowerCase();
        const data = document.getElementById('gen-data').value;

        if (!data) {
            showGeneratedResult('Por favor, selecione a data.', resultDiv, false);
            return;
        }

        filename = `${orgao.toLowerCase()}_${categoria}_${descricao.toLowerCase()}_${data}_${versao}.${extensao.toLowerCase()}`;
    }

    showGeneratedResult(filename, resultDiv, true);
}

function showGeneratedResult(content, resultDiv, isFilename) {
    resultDiv.className = 'generated-result show';

    if (isFilename) {
        resultDiv.innerHTML = `
            <h4><i class="fas fa-check-circle"></i> Nome gerado com sucesso!</h4>
            <div class="generated-filename" id="generated-filename-text">${content}</div>
            <button class="copy-btn" onclick="copyToClipboard()">
                <i class="fas fa-copy"></i> Copiar para Área de Transferência
            </button>
            <p style="margin-top: 15px; color: #6C757D; font-size: 0.9rem;">
                <i class="fas fa-lightbulb"></i> Use este nome ao salvar seu arquivo para garantir conformidade com o padrão.
            </p>
        `;
    } else {
        resultDiv.innerHTML = `
            <div style="background: #FFEBEE; padding: 20px; border-radius: 8px; border: 2px solid #DC3545;">
                <h4 style="color: #DC3545;"><i class="fas fa-exclamation-circle"></i> Atenção</h4>
                <p style="color: #212529;">${content}</p>
            </div>
        `;
    }
}

function copyToClipboard() {
    const text = document.getElementById('generated-filename-text').textContent;

    // Create temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');

        // Show success message
        const btn = event.target.closest('.copy-btn');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        btn.style.background = '#28A745';

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
        }, 2000);
    } catch (err) {
        alert('Erro ao copiar. Por favor, copie manualmente.');
    }

    document.body.removeChild(textarea);
}

// Utility: Remove accents
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Utility: Format to CamelCase
function toCamelCase(str) {
    return str
        .split(/[\s_-]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sticky navbar effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
    }

    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.stat-card, .format-card, .timeline-item, .standard-card, .phase-card, .category-card, .tool-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Print functionality
function printProposal() {
    window.print();
}

// Export to PDF (basic implementation - would need a library for full functionality)
function exportToPDF() {
    alert('Funcionalidade de exportação para PDF. Em produção, integrar com biblioteca como jsPDF ou html2pdf.');
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search/validator
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const input = document.getElementById('filename-input');
        if (input) {
            input.focus();
        }
    }
});

// Console Easter Egg
console.log('%c🗂️ Proposta de Padronização de Nomenclatura', 'color: #0055A5; font-size: 20px; font-weight: bold;');
console.log('%cSubsecretaria de Logística - Estado de São Paulo', 'color: #00A859; font-size: 14px;');
console.log('%cVersão 1.0 - Janeiro 2026', 'color: #6C757D; font-size: 12px;');
console.log('%c\nEsta aplicação foi desenvolvida para facilitar a aplicação de padrões de nomenclatura de arquivos.', 'color: #495057;');
console.log('%c\nDúvidas? Entre em contato: padronizacao.sublog@sp.gov.br', 'color: #0055A5;');

// Add tooltips functionality (simple implementation)
function createTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(element => {
        element.style.position = 'relative';
        element.style.cursor = 'help';

        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = element.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: #212529;
                color: white;
                padding: 8px 12px;
                border-radius: 5px;
                font-size: 0.85rem;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                margin-bottom: 5px;
                white-space: nowrap;
                z-index: 1000;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            `;

            element.appendChild(tooltip);
        });

        element.addEventListener('mouseleave', (e) => {
            const tooltip = element.querySelector('.custom-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Initialize tooltips if needed
setTimeout(createTooltips, 1000);

// Form validation helper
function validateInput(input, pattern, errorMessage) {
    const value = input.value.trim();
    if (!pattern.test(value)) {
        input.style.borderColor = '#DC3545';
        return false;
    } else {
        input.style.borderColor = '#28A745';
        return true;
    }
}

// Auto-format inputs
document.addEventListener('DOMContentLoaded', () => {
    // Auto-lowercase for all fields (exceto versão e data)
    const lowercaseFields = document.querySelectorAll('#gen-orgao, #gen-tema, #gen-categoria, #gen-descricao, #gen-extensao');
    lowercaseFields.forEach(field => {
        if (field) {
            field.addEventListener('input', (e) => {
                e.target.value = e.target.value.toLowerCase();
            });
        }
    });

    // Auto-format version (add 'v' if missing)
    const versionField = document.getElementById('gen-versao');
    if (versionField) {
        versionField.addEventListener('blur', (e) => {
            let value = e.target.value.trim();
            if (value && !value.startsWith('v')) {
                e.target.value = 'v' + value.padStart(2, '0');
            }
        });
    }
});

// Loading indicator
function showLoading() {
    const loader = document.createElement('div');
    loader.id = 'loading-indicator';
    loader.innerHTML = '<div class="spinner"></div>';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `;
    document.body.appendChild(loader);
}

function hideLoading() {
    const loader = document.getElementById('loading-indicator');
    if (loader) {
        loader.remove();
    }
}

// Example usage statistics (could be connected to analytics)
let validationCount = 0;
let generationCount = 0;

document.getElementById('validate-btn')?.addEventListener('click', () => {
    validationCount++;
    console.log(`Validações realizadas: ${validationCount}`);
});

document.getElementById('generate-btn')?.addEventListener('click', () => {
    generationCount++;
    console.log(`Gerações realizadas: ${generationCount}`);
});
