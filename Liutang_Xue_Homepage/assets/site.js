/* If a PDF is uploaded later under its original filename, use the local copy. */
(() => {
  if (!/^https?:$/.test(location.protocol)) return;
  const cache = new Map();
  document.querySelectorAll('a[data-local]').forEach(link => {
    link.addEventListener('click', async event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const local = link.dataset.local;
      const target = new URL(local, location.href);
      let available = cache.get(local);
      if (available === undefined) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 2000);
        try {
          const response = await fetch(target, {method:'HEAD', cache:'no-store', signal:controller.signal});
          available = response.ok && /application\/pdf/i.test(response.headers.get('content-type') || '');
        } catch (_) { available = false; }
        finally { clearTimeout(timer); }
        cache.set(local, available);
      }
      if (available) {
        const download = document.createElement('a');
        download.href = target.href;
        download.download = link.dataset.download || '';
        document.body.appendChild(download);
        download.click();
        download.remove();
      } else { window.location.assign(link.href); }
    });
  });
})();
