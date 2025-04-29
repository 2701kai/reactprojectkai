<>
  {/* Aliases for git bash */}
  {/* using https://transform.tools/html-to-jsx */}
  <div className="awesome" style={{ border: "1px solid red" }}>
    <label htmlFor="name">Enter your name: </label>
    <input type="text" id="name" />
  </div>
  <p>Enter your HTML here</p>
  <div>
    <h1>Aliases for terminal / git bash</h1>
    <h4>
      <code>sudo nano ~/.bashrc &amp;&amp; source ~/.bashrc</code>
    </h4>
    <pre>
      <code>
        #
        =================================================================================
        {"\n"}#{"       "}ALIASES{"\n"}#
        =================================================================================
        {"\n"}
        {"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}# GAC: Alt+G = Pre-fill commit message | Alt + G{"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}git_add_commit_prefill() {"{"}
        {"\n"}
        {"  "}READLINE_LINE="git add . &amp;&amp; git commit -m ''"{"\n"}
        {"  "}READLINE_POINT=28{"\n"}
        {"}"}
        {"\n"}bind -x '"\eg":git_add_commit_prefill'{"\n"}
        {"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}# GAC: Typed command `gac`{"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}gac() {"{"}
        {"\n"}
        {"  "}git add .{"\n"}
        {"  "}echo "Enter commit message:"{"\n"}
        {"  "}read -r msg{"\n"}
        {"  "}git commit -m "$msg"{"\n"}
        {"}"}
        {"\n"}
        {"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}# GACP: Alt+V or type `gacp`| Alt + V{"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}gacp() {"{"}
        {"\n"}
        {"  "}read -e -p "Commit message: " msg &amp;&amp; git add . &amp;&amp;
        git commit -m "$msg" &amp;&amp; git push{"\n"}
        {"}"}
        {"\n"}bind -x '"\ev":gacp'{"\n"}
        {"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}# Git alias - git push - `gp`{"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}alias gp='git push'{"\n"}
        {"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}# GCMM: Merge current branch into `main` | Alt + M{"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}gcmm() {"{"}
        {"\n"}
        {"  "}current_branch=$(git symbolic-ref --short HEAD){"\n"}
        {"\n"}
        {"  "}if [ "$current_branch" = "main" ]; then{"\n"}
        {"    "}echo "You're already on 'main'. Cannot merge 'main' into
        itself."{"\n"}
        {"    "}return 1{"\n"}
        {"  "}fi{"\n"}
        {"\n"}
        {"  "}echo "Merging '$current_branch' into 'main'..."{"\n"}
        {"  "}git checkout main &amp;&amp; git merge "$current_branch"{"\n"}
        {"}"}
        {"\n"}
        {"\n"}# Alt + M to trigger{"\n"}bind -x '"\em":gcmm'{"\n"}
        {"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}# NRD: npm run dev | Alt + D{"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}
        {"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}# VTD: execute script to create vite project w.tailwind/daisyUI
        {"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}
        {"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}# GHRC: gh repo create --remote | Alt + R{"\n"}#
        ---------------------------------------------------------------------------------
        {"\n"}# execute gh repo create &lt;name&gt; --private --source=.
        --remote=origin --push{"\n"}ghrc() {"{"}
        {"\n"}
        {"  "}read -e -p "Repo Name: " msg &amp;&amp; gh repo create "$msg"
        --private --source=. --remote=origin --push{"\n"}
        {"}"}
        {"\n"}
        {"\n"}bind -x '"\er":ghrc'{"\n"}
        {"\n"}#
        =================================================================================
        {"\n"}#{"       "}End ALIASES{"\n"}#
        =================================================================================
      </code>
    </pre>
  </div>
</>;
