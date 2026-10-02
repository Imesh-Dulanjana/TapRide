const fs = require('fs');

let content = fs.readFileSync('src/pages/OperatorDashboard.tsx', 'utf8');

// The cluster of closing tags before {/* QUICK ACTIONS */} is:
const badCluster = `          </div>
        </div>

                </div>
      </div>

          </div>
</div>

{/* QUICK ACTIONS */}`;

const goodCluster = `          </div>
        </div>
      </div>
    </div>

{/* QUICK ACTIONS */}`;

content = content.replace(badCluster, goodCluster);

fs.writeFileSync('src/pages/OperatorDashboard.tsx', content);
console.log('Fixed trailing DOM tags!');
